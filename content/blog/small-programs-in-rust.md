+++
title = "Shrinking the binary size of Rust programs"
date = 2023-07-17
description = "Rust is a performant language. But its binaries are huge. How can we shrink them?"

[taxonomies]
tags = ["opinion", "rust"]
+++

Last week I was discussing with a coworker the merits of Rust versus the enthroned 
leaders of systems programming: C and C++. I mentioned I had been building a program 
in Rust to handle some JSON processing over HTTPS. Rust rocks! With its packages,
I was able to get a bunch of functionality practically for free: HTTPS, authentication
guards (thanks, `rocket`), JSON parsing (thanks, `serde` and `serde_json`), and
many other features. But when I mentioned that the release binary was about 13 MB, 
he pounced and said that would be much smaller if I were developing for an embedded 
target and not for a Linux environment.

I thought that sounded strange. Why would Rust be bloating my binaries? Wasn't efficiency
one of the huge draws of Rust for systems programmers like me? What on Earth was
going into my binaries?

My first erroneous assumption was that only the routines that Rust needs from the
standard library and libc would be statically linked into the binary. There I was
wrong on two accounts. First, Rust binaries by default are statically linked, but
not to libc, just to the Rust code they interface with, the rust std library, etc.

Here we take the default "Hello, world" program cargo creates and see what it's linked
to:

```bash
cargo new small_hello_world
cd small_hello_world

cargo build --release
ldd target/release/small_hello_world
```

And we get the usual suspects.
```
linux-vdso.so.1 (0x00007fff21bfe000)
libgcc_s.so.1 => /usr/lib/libgcc_s.so.1 (0x00007f9ec5d9c000)
libc.so.6 => /usr/lib/libc.so.6 (0x00007f9ec5bb2000)
/lib64/ld-linux-x86-64.so.2 => /usr/lib64/ld-linux-x86-64.so.2 (0x00007f9ec5e57000)
```

But when we `ll` it, we see it is 4.1 MB. What on Earth is taking up all that room?

By comparison, here are the sizes of the same "Hello, world" program in C, C++, and assembly
(see [my Github](https://github.com/steelswords/assembly-playground) for the asm code):
| Language | Program Size |
|---------|---------------|
| C       | 15,416 bytes |
| C++     | 15,896 bytes |
| Assembly | 15,520 bytes |

 Yes, you saw that right. The assembly program
is **larger** than my C program. Perhaps we'll explore this another time. And the
extra 15 KB of linked in gunk is a little surprising for such bare-bones languages.

But why is the Rust program still 269 times larger?

It turns out rust-lang.org has a [https://prev.rust-lang.org/en-US/faq.html#why-do-rust-programs-have-larger-binary-sizes-than-C-programs](FAQ) that talks about this very topic. There are several reasons why Rust programs are bigger.

First, is monomorphization. Like C++ templates, generic functions and types are
generated for each time it's used concretely in the program. This doesn't affect
our hello world program at all, but it's nice to know.

Second, debug symbols and panic unwinding. Even in release mode, Rust includes
the debug symbols to make backtraces during panics worthwhile. When programs are
linked with the Rust standard library, they also are linked against `libbacktrace` 
and `libunwind`, which add more overhead. You can get rid of these libraries by
not using `#![no_std]`, but that raises its own set of difficulties.

Third, Rust does not do link-time optimization by default. This means larger binaries.

Fourth, Rust defaults to an allocator called jemalloc, which apprarently increases
the performance and reliability of your garden-variety system allocator. I don't
know much more about this facet.

Still, let's start disabling those things.

# Shrinking the Binary
Let's strip the debug symbols by using `strip`:

```
strip -o hello-world-stripped small_hello_world
```

Alright, that got us down to 321,848 bytes. That's amazing! A whole order of magnitude
smaller. Now we've just got to shrink it by a factor of 20 or so.

As a nice touch (yay, Rust tooling!), you can automatically set up the `release` profile
of your `Cargo.toml` to strip the debug symbols out:
```toml
[profile.release]
strip = true
```

This is thanks to [johnthagen's wonderful guide on shrinking Rust programs](https://github.com/johnthagen/min-sized-rust),
which informs much of this article.

(For those curious, this gives me the same size as manually `strip`ing the binary
afterwards).

We will save using `no_std` for later. For now, let's see what happens if we optimize for size:

```toml
[profile.release]
strip = true
opt-level = "z"
```

Same size. I gues there's not much to shrink down. But how about Link Time Optimization?
By default, the Cargo compiles and optimizes each compilation unit serparately.
Link time optimization, [described here](https://llvm.org/docs/LinkTimeOptimization.html),
takes longer in the link step, but can produce better optimized binaries with less dead code.
We can enable it by adding `lto = true` in our `profile.release` section of `Cargo.toml`.

Note that this brought my build time from 0.12 s to 3.86 s; quite the jump.
But it also cut about 100 KB from our binary. The size is now 280,888 bytes.
But can we get it down further?

Let's restrict the number of code generation units. By default, Cargo spins up multiple
codegen units to speed up compile times, but that does limit some of the optimizations
you can do. Add `codegen-units = 1` to the `profile.release` section.

Unfortunately, that didn't affect the size at all. And it bumped my build time up to 8.15 s.

Let's try disabling some of the nicer features of Rust's `panic!` calls. By default, a
panic unwinds the stack frame and prints a backtrace. But we can strip that feature
down by causing panic to abort immediately instead of producing a backtrace. To do
this, add `panic = "abort"` to the same section as above.

The good news is that reclaimed about 4KB. We're at 276,792 bytes now.

The bad news is that is the end of the easy modifications. The rest of the 
suggestions involve optimizing `libstd` for size and taking `libstd` out altogether.
These are projects for a different day.
