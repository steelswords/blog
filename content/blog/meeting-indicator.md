+++
title = "Meeting Indicator"
date = 2022-12-17
description = "I made a WiFi-controlled light to show my family when I'm in a meeting"

[taxonomies]
tags = ["arduino"]
+++

# Meeting Indicator
Ever since I started working from home my wife has wanted to know if I’m in a meeting or not. You know, to know if she can interrupt me to ask me a question or say goodbye when she leaves for an errand, that sort of thing. Her proposed solution to this problem was some sort of remote-controlled LED stand.

This was a fine solution, but since most of these remotes use IR, they would likely require me to stand up from my desk, cross the room, open the door, turn on the lights with a remote, and then go back to my meeting. And I would have to repeat all those steps when I’m done with the meeting. That’s a lot of interruption and steps, and at that point I might as well have a hotel “Do Not Disturb” sign I just hang on my door. And from experience, I probably would not remember to set the indicator until I was already in the meeting.

So there was the problem statement. I need something clear to indicate I’m in a meeting, and it has to be something low-friction for me. And if I happened to make it easy to automate in the future (for instance, it detects when Zoom or Teams is open and sets/unsets automatically), even better!

I chose the trusty ESP8266 for this job. I have a bunch of them lying around, and they come with a ready-made server application example. I coded in a couple of endpoints to change the colors and query what color was displayed. The code was displayed below

I started prototyping on a breadboard. I was able to minimize the number of components I needed for a bright light by joining the cathodes of all four LEDs and running a single resistor from that common node to ground. This seems a little sketchy at first, but as long as I never have both colors of LEDs on at the same time, it will be just fine. Heck, it will probably be okay even if all four LEDs are on simultaneously anyway.

The brightness of just one green or one red LED powered from the microcontroller was not very visible, so I put two of each color in parallel.

I had this on a breadboard for probably a month or so to prove the hardware and then moved into a more permanent perfboard.

{{ dimmable_image(src="img/articles/singles/meeting-indicator.jpg", alt="My meeting indicator") }}

A couple of aliases later and I can simply type `inmeeting` or `outmeeting` on my work laptop and my light changes from green to red and back again. This little project has helped my working from home life immensely!
