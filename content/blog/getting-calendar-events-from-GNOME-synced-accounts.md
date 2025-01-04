+++
title = "A Script to Report Unscheduled Hours Left in the Day"
date = 2024-05-12
description = "Getting synced Calendar events from GNOME Calendar is harder than it looks."

[taxonomies]
tags = ["linux", "tweaks", "python"]
+++

# A Tale as Old as Time

If I had a trivial amount of currency for every time an engineer said,
"It shouldn't be too hard to XYZ. All you'd have to do is ABC,"
I would have an exceptionally non-trivial amount of currency. This is one of those stories.

I use Tmux extensively. If I could run my whole life from a terminal emulator, I would.
But I haven't played very much with ricing the thing yet. "What would be useful to add
to the status line?" I wondered. IPv4 address? Certainly. But much else that's offered
out of the box.... I don't know.

That's when it hit me. What if I could put the number of usuable hours left in
the work day in the status line? Like `5pm - now - (meetings from now till 5pm)`.
Sounds great, right? I already have my work calendar synced up on my work computer,
and my personal ones on my personal computer. How hard would it be to get those
events from wherever GNOME stores them?

# Querying Calendar Events
The answer, of course, is harder than I thought. I believe I have stumbled on one
of those rare coding subjects that not a great many people dabble in. I will
spare the reader a long winded account of my grueling research process and leave
my "final recipe," so to speak, for any interested parties in the future.

I know that I sync my work calendar to my desktop through Evolution-EWS, because
the built-in Pop!\_OS stuff does not support Office 365. (Thanks, Microsoft.)
So my first attempts were to look at how to connect to whatever Evolution uses on
the back end. For this, you will need to access the `EDataServer`. For the longest
time, I could only find
[this forum post](https://discourse.gnome.org/t/accessing-evolution-calendars-from-scripts/17884),
which leads you to the
[Evolution Data Server documentation](https://gnome.pages.gitlab.gnome.org/evolution-data-server/libedataserver/method.SourceRegistry.list_enabled.html).
But the API was all documented in C.

I love C, but I had already determined that since I wanted this tool to be part
of my scripts repo, easy to deploy onto new machines and run from Tmux, I wanted
to use Python. I thought that would give me the most portability without having
to maintain a binary anywhere.

It took me a while to find the Python docs for what I needed, but
[eventually I found the Python docs for PyGObject](https://amolenaar.pages.gitlab.gnome.org/pygobject-docs/index.html).
Looking for EDataServer, you learn that you need to create an `EDataServer.SourceRegistry`
object, `list_sources` on it, and then connect an `ECal.Client` to each one of the sources.

Then if you don't want to get *every event ever entered on each calendar*, you
have to specify a search query using an S-expression.

What is an S-expression, you might ask? Great question! It's a LISP-like object 
made from parentheses and fever dreams of documented APIs. There is literally
no documentation on the format (see "It's all in the code (TM)"", below).

But here are the bits and pieces I was able to scrape together to let me write a proper S-expression for these queries.
- [It's all in the code (TM)](https://discourse.gnome.org/t/how-do-i-use-s-expressions-on-evolution-data-servers-ecal-api/9044)
- [One paltry example](https://github.com/elementary/calendar/blob/1099ba61def44231cbbb9ab594432bda32643720/core/Services/Calendar/EventStore.vala#L410)
- [Actually good examples](https://mail.gnome.org/archives/evolution-hackers/2022-March/msg00001.html)

Think you're set to write some good queries in S-expressions? There's one more
gotcha you should know about.

The ranges are **exclusive, not inclusive**. So if you have an event that goes
from 4-5pm, and you query all events from 9 am to 5 pm, you won't get that 4pm event.

In my script I just add a second to the end and subtract a second from the
beginning time, so I'm querying from 8:59:59 to 5:00:01 during work hours.

# Other neat features

I try to keep the deltas between the configs and setup on my work and personal to
a minimum. So I put some business logic in to intelligently determine which part
of the day we are calling the script in and thus, how many hours are left until
the next phase of the day. These are the parts that are supported:
- Early morning before work
- At work
- After work, but before bedtime
- After bedtime, but before a reasonable wake up hour.

The last two I hope will be useful for personal regulation. Sometimes I get so
caught up in a project it can be hard to extract myself to rest for the night.

And there you have it! A script that reads from your synced calendars and tells
you how many free hours you have until your next stage if the day!

# The Code
You can find the full script in [my scripts repo on GitHub](https://github.com/steelswords/scripts/blob/master/time-left-in-day.py).
