+++
title = "The Useless Box"
date = 2022-06-29
description = "I made a box that is entirely useless and cheeky. What fun!"

[taxonomies]
tags = ["arduino", "showcase"]
+++

> A useless project, but a fun one to be sure

I wanted to make a useless box because it sounded like a fun project and it would make a nice gift for my wife. Plus, I had all the hardware!

Here it is in action:

{{ youtube(id="e5GbTxEwg40") }}

The primary reason this took so long was because I didn't have a 3D printer at 
first. After I acquired one this project took off! It was so exciting to print 
out those parts effortlessly, instead of trying to craft them out of cardboard.

# Mechanical Assembly

All of the mechanical pieces are 3D printed. I used balassy's design, 
[found on Thingiverse](https://www.thingiverse.com/thing:3856965).

Most of the screws used are M3. It’s so nice to use metric screws. They’re much 
simpler than the multiple Imperial scales we use here in the States.

There was nothing mechanical holding the lid opener servo to the bottom of the 
box, so I used an adhesive strip from a package of command hooks. It worked 
really well.

# Electrical Assembly

{{ dimmable_image(src="img/articles/useless-box/uselessbox-hw-overview.jpg", alt="Useless Box hardware assembly") }}

The microcontroller is an Arduino Nano, which I had insisted on purchasing ages 
ago for reasons lost to time. (I much prefer the ESP8266 for projects these days 
due to its WiFi connectivity.) I used a perfboard I had on hand from AliExpress, 
as well as various passive components and a toggle switch I had for another, 
scrapped project.

## The Perfboard

{{ dimmable_image(src="img/articles/useless-box/perfboard.jpg", alt="Up close on some very prototype-grade soldering") }}

This perfboard was certainly not my finest. I really should have planned this 
board out better. First off, I tried to drive the servo signal from the Arduino’s 
analog pins. That didn’t work, so I tied those analog pins to some digital pins 
on the other side of the board. Then I found out I did not understand the pinout 
of this switch at all. Rookie mistake! It just goes to show: test everything before 
you solder it. I figured out the ON-OFF-ON switch’s pinnouts and rewired that.

Next I had issues with my hardware switch debouncing circuit. If I jiggled the 
switch in the center position, without switching it, the value read on the input 
pin would get toggled on and off rapidly. That sounded like the pin was floating 
when the switch wasn’t engaged. Bah. More bad planning on my part. So I took a 
1 MΩ resistor and tied the pin low. I was kicking myself for not taking advantage 
of the internal pullup resistors that the microcontroller has to offer. Well, 
next time I’ll plan better and maybe just design some PCBs.

# Software

I set up an interrupt to handle a change on the input pin. This is a more efficient way of doing things than polling. I registered the handler and to my surprise the ISR was usually getting called twice per switch. Ugh. That likely means my low-pass hardware debouncing circuit is a little insufficient. I should have just done some software debouncing, but I’m such a stickler for hardware efficiency. Next iteration I won’t bother with the low pass filter debouncing design at all.

# The next generation

One day, when I catch the right wind in my sails, I’ll make the useless box sassier, as per my wife’s request. I whiteboarded a mathematical model of sass – or sassimatics, as I call it – as a heuristic for getting the box to respond in a seemingly more exasperated way based on how “annoyed” it was. I’ll update this page when it happens.

{{ dimmable_image(src="img/articles/useless-box/conclusion.jpg", alt="The Useless Box") }}
