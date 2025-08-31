+++
title = "Professional Experience"
date = 2023-01-01
# updated = 2023-04-28
description = "Tristan Andrus is an embedded engineer with a strong Linux background."

# [taxonomies]
# tags = ["markdown", "showcase"]
+++

# Professional Experience

I have a B.S. in computer engineering from Utah State University. As an embedded engineer, I enjoy both the software and hardware realms and thrive on the interplay between the two.

I have been working as an engineer professionally since 2018, and full-time since 2021.

# Software

I have been coding since 2008, when I learned BASIC for an English project, of all 
things. I went on to learn C, C++, C#, assembly for x86(_64) and ARM, Rust, and
Python, and dabble in a few others, like Java and JavaScript. I am most proficient
in C++. Most of my professional development has been in C++, followed by Python,
C, and Rust. I have also done a number of personal projects in those languages
as well.

Some of my notable software projects include:

- The operating system kernel I wrote for my senior design project
- A CPSL compiler
- The STM32 ARM-powered robot I controlled over Bluetooth (pure C code)
- The MAVLink library a previous company has been using for years for command and
  control of ArduCopter drones
- Control code for a manufacturing machine
- An implementation of ARP
- A grammar-based text generator
- A logging solution for embedded Linux devices for C++ and Rust that manages
  multiple loggging sources gracefully and efficiently
- Multiple integrations with thermostats over various protocols

# Linux

Linux has been my daily driver since 2017. I work, play, write, and game
on Linux 98% of the time. I am proficient with shell scripting as well as systemd
service configuration. Around 2018, I switched to using Arch on my main
machines as a way of gaining understanding of how Linux works underneath the hood.
I spent a few months playing with Nix -- enough to know its uses and pitfalls.

I've done many embedded Linux projects, both for work and personal enjoyment.
Most of that has been through Yocto.

# Hardware
## FPGA

I have done some work with FPGAs in both Verilog and VHDL. Some notable projects from this category include:

- A 4-bit CPU complete with arithmetic logic unit (ALU) and instruction pointer
- A bumper pool game (think pong but with bouncey barriers in the middle of the field)
  that utilized DACs and ADCs and drove a VGA connector for graphics
- A pseudo-random number generator

## Analog Design/PCBs

I have designed two PCBs for work of about 10-20 components each. I used ExpressPCB 
and Altium for them. The former project was implemented and flown on drone missions, 
but production of the latter has been halted until the program gets more funding. 
I have also designed, layed out, and assembled PCBs at home with KiCad.

Besides straight PCBs, I also design circuits when I can. For instance, I designed 
and soldered all the circuitry in my Useless Box project (article coming soon).

## Power

My most significant foray into power electronics was the design of a 2 kW solar 
powered battery charging station which is still in use today. I sourced panels,
outlets, DC jacks, the charge controller, batteries, the whole kit and kaboodle.
There were no off-the-shelf solutions that met our customer's needs, so I got to
design the system from scratch. And install it in the freezing cold of northern
Utah too, but that's another story.

One of my primary concerns as “the drone guy” at Space Dynamics Lab was ensuring
all the payload components have power and that we balance the payload and battery
weights against required flight time. I selected  various BECs or voltage
regulators to ensure there is enough current at the appropriate voltages for the
payload components on board for various missions and drone builds.
