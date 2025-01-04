+++
title = "Let's Build a Cross Compiler!"
date = 2023-07-02
description = "I build a cross compiler for the Raspberry Pi Zero W with Crosstool-ng"

[taxonomies]
tags = ["linux"]
+++

# Creating a Cross Compiler for an ARM target
I want to learn more about cross compiling. I'm familiar with the concept, 
I've done my fair share as an embedded developer, but most of the time I just use 
a pre-generated toolchain from Yocto or a microcontroller SDK.I've even built a 
cross-compiler for my operating system project before, but that was just following 
the tutorial on the OSDev Wiki.

So how do I make a cross compiler for pleasure and profit?

For this project, I'm using my trusty Raspberry Pi Zero W. This is for a couple of reasons.

First, I recently wanted to cross-compile for the Zero W and could not find a toolchain
that would work for me. I found a precompiled one, but it had the wrong version
of glibc included or something. 

Second, it's a less-mainstream ARM target. Most of the help I've seen on the Interwebs
for cross-compiling to Pis is for the Pi 3 or Pi 4. And they're using a different
architecture version than the Pi Zero.

Which brings me to this project. How do I create a cross-compiler toolchain for the
Pi Zero W, which a specific glibc version? And more generally, how can I create
a cross compiler for an arbitrary platform? That, more than anything, is the real
key takeaway I'm after.

I konw I can set the right flags for the target arch and whether to use hard or 
soft floats, etc., etc. and build binutils, glibc, and gcc from scratch, but that
sounds really onerous. Is there some other way?

# Enter Crosstool-ng.

Crosstool-ng is a nifty set of scripts designed to make downloading and building 
the right binutils, libc, and compiler source easy peasy. And boy, does it deliver. 
I was able to go from no experience to making a toolchain for my Raspberry Pi 
Zero W in under an hour while watching a movie. (Home tinkerers will likely know
what I mean about a movie-watching productivity hit.)

# Configuring Crosstool-ng
There are a few config options we need to set to tell crosstool-ng to build the right thing.

The target architecture is of course arm. But what about the instruction set mode? 
Is it `arm` or `thumb`? I think there will be many such details I don't know off 
the top of my head. Let's find the datasheet for the CPU.  I found on the Raspberry Pi 
website that the Pi Zero W uses a Broadcom BCM2835 chip, which contains a 
single-core ARM1176JZF-S processor. Let's look at the datasheet for the ARM1176JZF-S.

K, it supports arm and thumb instructions, so let's go with arm.

There were some other config parameters I set. Most of them were obvious to me,
so I didn't record them (unfortunate for those 100% of other people who think 
differently from me, I do apologize). But some of the config items were kind of
like a treasure hunt. For reference, I've recorded the trickiest items, where I found
the right value, and what it was for the Pi Zero W here:

| Config parameter | Where I found the answer | Answer |
--------------------------------|------------------------|---------------
| architecture level: `CT_ARCH_ARCH` | `gcc -v` | armv6 |
| glibc version | `ldd --version` | 2.31-13 |
| Various FPU options | `gcc -v` | hard float, hardware float throughout |

Alright, with those set, we're ready to build the toolchain!

# Building the Toolchain

With the config values all set to the proper values (hopefully!),  it was time to 
save my configuration, copy it to `.config`, and run `ct-ng build.10`

After about 15-20 minutes, crosstool-ng had downloaded the specified versions of 
everything it needed and built a complete compiler and toolchain for me!

Using that toolchain, I compiled my `hello.c` program and `scp`ed it to my pi zero. 
Hey presto! It works!

# Conclusion

In the future, if I ever need to make a cross compiler, I'm going to build it with
crosstool-ng. There is no reason not to, and it made the whole process super easy,
clean, and reproducible. Three wonderful things to see in the mess of complexity
that is computer programming.
