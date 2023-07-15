+++
title = "Compiling small programs in Rust"
date = 2023-07-14
description = "Rust is a performant language. What makes its binaries so big?"
draft = true

[taxonomies]
tags = ["opinion"]
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

By comparison, when I write the same program in C and C++, I get programs that are
16 KB in size (specifically, 15416 bytes for the C program and 15896 bytes for the C++
program). When I write [https://github.com/steelswords/assembly-playground](hello world in assembly),
my size is very similar: 15520 bytes. Yes, you saw that right. The assembly program
is **larger** than my C program. And here's the code for both:

helloworld.asm:
```asm
.globl main
.extern printf

.section .text

main:
    # Needed to adhere to the System V ABI. More explanation to come.
    push %rbx
    # You might be tempted to simply mov the address of string into %rdi, but this
    # requires the executable to be a PIE (Position Independent Executable), which
    # it takes some tricks to make gcc and ld happy about. But by using lea, we
    # get something that Just Works(TM) with gcc.
    #mov $welcomeMessage, %rdx
    lea welcomeMessage(%rip), %rdi

    # Printf expects the number of vector arguments to be in al, so clear al
    xor %eax, %eax

    call printf
    pop %rbx

exit_cleanly:
    ret
    movq $1, %rax
    movq $0, %rbx
    int $0x80 # Syscall. This one calls exit(0)

.section .data
welcomeMessage:
    .asciz "Hello, world!\n"
```

