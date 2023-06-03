+++
title = "The Laser Tank"
date = 2018-12-20
description = ""

[taxonomies]
tags = ["showcase", "project"]
+++

# The Laser Tank

One Christmas, Santa was very kind and left me a tank tread chassis. It was a beautiful thing, with two geared DC motors on an aluminum frame. I meant to make a robot out of it immediately, but unfortunately school and work got in the way of using it in a project. So when my lab partner for my microcontrollers class and I were given free range over our final project, I seized that opportunity to make something out of that chassis. And make something we did…. The LASER TANK!

The proposal for this project didn’t do anything really very groundbreaking. We didn’t implement computer vision on it or anything, since I envisioned this project as just making a working robot out of that chassis. And hey, it worked.

The robot is remote controlled over Bluetooth and drives around and shoots its little laser turret (actually a $3 laser pointer we dismantled). Also it looks cool. The other really cool thing about it is you can control where the laser points and shoot it.

We used an HC-06 Bluetooth module to pair to our phones and control the robot. We installed a Bluetooth serial terminal app on an Android phone and sent the robot plaintext commands over the UART connection the HC-06 provides. This project would be really trivial if we were allowed to use an Arduino and its support libraries. Instead we had to implement all the helper functions ourselves. This included code for articulating the stepper motor that the laser sits upon and for interacting with the microcontroller’s onboard UART controller. It was lots of fun!

Here it is in action:

{{ youtube(id="xH9-nnhlVDA") }}
