+++
title = "Linux Kernel Development, part 2: Character Devices"
date = 2023-01-21
description = "Let's write a kernel module to give us /dev/fibonacci, which gives us Fibonacci numbers when read"

[taxonomies]
tags = ["kernel", "linux", "showcase"]
+++

Now that we’ve done [a “Hello, World” kernel module](@/blog/linux-kernel-development-part-1.md), 
let’s dive into something a little less trivial: a character device driver. This 
will allow us to create a file in `/dev` that we can read and write from. Our 
goal here is to make a `/dev/fibonacci0` device that gives us the next Fibonacci 
number every time we read from it.

This article will give a brief overview of what’s going on since a comprehensive 
treatment of the concepts involved is more than I want to type out today. The 
curious reader will find more details in the “Further Reading” section.

The code for this article is available on [my Github](https://github.com/steelswords/linux-kernel-modules).

Of course, I started this project by adapting my “Hello, World” kernel module 
from the last article. Then I began working in the dynamic major number allocation 
and resource creation functions described in _Linux Device Drivers_. My code was 
building and running alright:


{{ dimmable_image(src="img/articles/linux-kernel-development/part2-not-in-dev.png", alt="Parital success") }}

But there was nothing in `/dev`! Our device did make it into `/sys`, but not all 
the way to `/dev`. I turned to some more recent sources to fix my problems. I’m 
not sure if _Linux Device Drivers_ is just too old to reference here (I suspect 
not), or if I missed a crucial section in my late-night, new-parent reading of it. 
Either way, I found some help courtesy of Derek Molloy’s examples, linked below.

I was getting abysmal speed through SSH, so I soldered on the GPIO headers and 
busted out the serial console. Because embedded engineers can have nice things 
too, I’m using `tmux` over my serial connection. This not only lets me have multiple 
terminals open, but it also maintains them if my cable gets unplugged.

First thing to do is to copy our new module over and run it.

```bash
cd /lib/modules/5.15.84+/kernel
sudo cp /tmp/fibonacci.ko .
sudo modprobe fibonacci
```

Then we can see what `dmesg` has to say.

{{ dimmable_image(src="img/articles/linux-kernel-development/part2-dmesg.png", alt="dmesg says the device was created successfully") }}

That’s good news! Everything seems to have loaded properly. Let’s check that our device is in `/dev`.

{{ dimmable_image(src="img/articles/linux-kernel-development/part2-ls-dev.png", alt="Listing of /dev showing fibonacci0") }}

Nice! Now let’s read from it:

```bash
sudo cat /dev/fibonacci0
```

At first, nothing was forthcoming. I was writing to the user-space buffer, but 
my return values were all off. Because it took me a while to figure out what was 
going on, I will include what I’ve learned here.

# How to `read()`

The prototype for our `read()` function looks like this:

```C
ssize_t mydriver_read(struct file *filePointer, char* userspaceBuffer, size_t sizeOfUserspaceBuffer, loff_t *offset)
```

The first argument is a pointer to a `struct file`. This tells the driver which 
file is being accessed from userspace. It would be important if I were writing a 
driver that handled multiple files, but since I am only ever dealing with one 
file I don’t particularly care about this argument.

The second argument, `userspaceBuffer`, is a pointer to a buffer in userspace. 
This is the destination buffer. You want to copy your data, which is currently in 
kernel memory, into that userspace buffer. This, like most things in kernel development, 
is not something you can just `strcpy()` away. Thanks to the differences in kernel 
memory and regular, paged userspace memory, you could open up security holes or trigger 
a page fault from kernel code (which is a no-no), or other icky things. So how the 
heck do we get data into that buffer? Thankfully, the Linux kernel API provides a 
nifty function for us that works much like `strcpy`: `copy_to_user()`. It works 
much the same way, but it makes sure that all the virtual memory details are all squared away.

The program in userland making this read() call passes in the size of it’s 
receiving buffer, which I have here named `sizeOfUserspaceBuffer`, as well as an 
`offset`. We set that `offset` in our driver code. It represents how much of the 
kernel buffer we have already read. I’ll explain a little more below.

## Return Values

Valid return values for our `read()` function are:

- 0. This indicates that the end of the file has been reached. The userspace program assumes that no data has been transferred.
- Negative value. Indicates an error
- Non-negative value. Indicates the number of bytes copied into the receiving userspace buffer. That is, how much was “read”.

So how does this work with `offset`? If I have 48 bytes in my driver for the user 
to read, they `read()` and give me a pointer to a 32-byte buffer, then I set 
`offset` to 32, since that is where we want the user to next call `read()`. 
(Userspace will keep calling `read()` until I return a value that indicates they 
have consumed all the available data.) Next time, I get a `read()` call with `offset` 
of 32, and I know to pass bytes 32-47. Finally, the third time I get a `read()` 
call, I return 0 to let the userspace program know it got all the data I had.

# Putting it all together

So I made this adjustment to my code and…


{{ dimmable_image(src="img/articles/linux-kernel-development/part2-success.png", alt="Success! Reading fibonacci numbers out of a character device") }}

Huzzah! That’s just what we wanted. Whew! I don’t think I’ve ever worked that hard to generate the Fibonacci series.

# Further Reading

- [https://linux-kernel-labs.github.io/refs/heads/master/labs/device_drivers.html](https://linux-kernel-labs.github.io/refs/heads/master/labs/device_drivers.html)
- [https://static.lwn.net/images/pdf/LDD3/ch03.pdf](https://static.lwn.net/images/pdf/LDD3/ch03.pdf)
- [Linux Kernel API Reference](https://www.kernel.org/doc/htmldocs/kernel-api/index.html)
- [Derek Molloy’s treatment of the subject](http://derekmolloy.ie/writing-a-linux-kernel-module-part-2-a-character-device/)
