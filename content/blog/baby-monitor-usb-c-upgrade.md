+++
title = "Upgrading a VTech Baby Monitor"
date = 2023-09-06
description = "I liberated our baby monitor from its barrel plug charger by installing a USB-C port on it."

[taxonomies]
tags = ["hardware"]
+++

# Upgrading my VTech Baby Monitor

There is not much to tell here, but more to show. Our baby monitor works fine. It's great.
The battery is perhaps a little weedy, but what can you expect from NiMH?
My only irritation with it was the barrel plug its charger used. It is super inconvenient
to be tied to one baby monitor charger when we have all these perfectly good USB-C
chargers all over the house. It bugged me that I couldn't plug the monitor into
USB-C, The Universal Charger™, so I fixed it.

The DC power supply the monitor came with has 6V at a 400 mA.

So first, I found an MT3608 module on AliExpress. It's got a USB-C port and an adjustable boost
voltage regulator. [The link, for the curious](https://a.aliexpress.com/_m046TLM).

And here's a picture.

{{ dimmable_image(src="img/articles/baby-monitor-upgrade/usb-c-module.jpg", alt="MT3608 DC-DC Booster Module") }}

I desoldered the barrel jack and attached a little pigtail with the module on it.


{{ dimmable_image(src="img/articles/baby-monitor-upgrade/barrel-jack-interior.jpg", alt="The rear of the barrel jack on the PCB") }}

And Bob's your uncle.

{{ dimmable_image(src="img/articles/baby-monitor-upgrade/baby-monitor-upgrade-final.jpg", alt="The final product: Fully reassembled, working, and with a little USB pigtail.") }}

# But... It's Ugly

Yeah. It is a little bit. There's a chance I might put that module inside the chassis,
but I did this mostly while my baby was sleeping, so I didn't want to break out my
Dremel. Maybe another day.

# Reviews

From my wife: "It seems to charge better!"

Also, "I like it!"

So big win here!
