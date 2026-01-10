+++
title = "A Descent into Lovecraftian Madness Because of Time Zones"
date = 2025-11-03
description = "A right of passage was achieved: but at what cost?"
draft = false

[taxonomies]
tags = ["programming"]
+++

# Rite of Passage Achieved: Descent into Lovecraftian Madness Because of Time Zones

> Editor's note: This happened in 2024, but was published over a year later on this blog.

Oh my gosh, I knew it was bad, but it just keeps getting worse the more I look at 
it. I knew about things like North Korea being a half hour ahead of South Korea,
just to show 'em. I knew about weird offsets like Nepalese time, which is UTC + 5:45.
(What the heck, Nepal?) But now I'm looking at the
[tz database](https://www.iana.org/time-zones), and the *complexity* they have to maintain just
to keep track of changes in time zones. My word. And to the maintainers' credit,
the data is well-annotated with dated comments documenting the reasons and sources
for changes. Just perusing the entries for North America, I come across a pretty
typical entry:

> From Arthur David Olson (2011-02-09):
> I just spoke by phone with a staff member at the Metlakatla Indian
> Community office (using contact information available at
> http://www.commerce.state.ak.us/dca/commdb/CIS.cfm?Comm_Boro_name=Metlakatla
> It's shortly after 1:00 here on the east coast of the United States;
> the staffer said it was shortly after 10:00 there. When I asked whether
> that meant they were on Pacific time, they said no - they were on their
> own time. I asked about daylight saving; they said it wasn't used. I
> did not inquire about practices in the past.

That seems pretty reasonable. But then follows another change in 2015 where
Metlakatla decided to follow Alaska's time, "switching between AKST and AKDT from now on...."

And then the thing that broke me.

> From Ryan Stanley (2018-11-06):
> The Metlakatla community in Alaska has decided not to change its
> clock back an hour starting on November 4th, 2018 (day before yesterday).
> They will be gmtoff=-28800 year-round.
> https://www.facebook.com/141055983004923/photos/pb.141055983004923.-2207520000.1541465673./569081370202380/

A ***Facebook post***? The world's most authoritative timezone database, having
to reference a *Facebook post* as an authoritative source for how a community
reckons time. Oh my gosh, time reckoning is so much worse than I ever thought.

And here's the thing. Metlakatla, AK is a small community of 1454 souls as of the
2020 census. It's a census-designated place, which means it's unincorporated. And 
it looks like it's part of the Annette Island Reserve for Alskan Natives. It makes
sense for these people to choose their own time. The humanist in me applauds their
show of independence from the time reckoning imposed by colonial invaders. The 
programmer in me just broke, as this time reckoning problem just went from the
"This is a hard problem, you have to be careful" category of difficulty to the
"You can never get this 100% right" category.
