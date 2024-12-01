+++
title = "The Giveback License"
date = 2024-12-01
description = "A new software license for FOSS"

[taxonomies]
tags = ["open source"]
+++

# Open Source, in Broad Strokes

I'm passionate about open source. I really like the virality of the GPL and other
copyleft licenses, but I can't help but feel that they have some flaws.

The first is adoption. Organizations that do not fully embrace open source often
prevent their dev teams from using copyleft licenses at all, because it makes
more trouble for them.

But a lot of the points that Richard Stallman makes about closed source software being a
form of exploitation and control. It is good for the consumer to have access to
the source code of the products they use. Even if that consumer isn't technical,
they can then benefit from the community contributions of users that are.

And then there's the issue of huge corporations using FOSS projects in their
products and never contributing back. My understanding is that funding is always
a challenge. For-profit entities by their very nature are disinclined to contribute
back to open source projects unless they have to.

So we're kind of stuck between an RMS world where all source code is open and
nothing is proprietary, and a world where companies by and large just exploit
the open source community and never contribute anything back.

The Giveback License tries to bridge those two worlds.

# The Giveback License

The Giveback License aims to help with both accessibility and the need for
contributors to open source projects. It is essentially a modified MIT license
with the proviso that all modifications be contributed back to the source repo
or another publicly available repository.

## The License Text

> The Giveback License, v0.1

> Copyright (c) <year> <copyright holders>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the “Software”), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> 1. The above copyright notice and this permission notice shall be included in
>    all copies or substantial portions of the Software.
> 2. All modifications to the Software must contributed back to the original
>    source repository, or otherwise made publicly available within 6 (six)
>    calendar months since the modifications were first written and saved to a
>    storage device.
> 3. Unless given specific prior written permission, the names of neither the
>    copyright holder nor this project's contributors may be used to construe
>    endorsement or promotion of products derived from this Software.
> 
> THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Giving Back
What that means is when a company uses a library, for instance, licensed under
the Giveback license, they are free to use it however they wish. If an engineer
at that company wants to add a feature to that library, they are free to do so.
But they are then required to either open source their fork of that library or
submit a pull request.

Win-win, right? The company gets access to fairly permissable software to speed
their development times. The FOSS project gets contributions back whenever a
user implements a new feature or fix, and the developers at the company can
feel safe adding a Giveback-licensed library to their app because it won't
cause huge problems with licensing.

I'm an engineer, not a lawyer, so this can't be legal advice. But I'd encourage
you to take a look at the Giveback license in its
[Github repo](https://github.com/steelswords/Giveback-License). Let me know what
you think!
