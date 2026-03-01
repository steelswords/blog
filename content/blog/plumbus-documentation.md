+++
title = "Plumbus Documentation"
date = 2025-01-18
description = "A new vocabulary for detailed documentation that doesn't answer any questions"
draft = false

[taxonomies]
tags = ["opinion"]
+++

# Plumbus Documentation
{% attributed_block_quote(citation="*Rick and Morty Season 2*, episode 8") %}
Today on *How They Do It*: Plumbuses. Everyone has a Plumbus in their home.

First, they take the dinglebop and they smooth it out with a bunch of schleem.
The schleem is then repurposed for later batches. They take the dinglebop and they
push it through the grumbo, where the fleeb is rubbed against it.

It's important that the fleeb is rubbed because the fleeb has all of the fleeb juice.

Then, a shlami shows up and he rubs it and spits on it.

They cut the fleeb. There's several hizzards in the way.
The blamphs rub against the chumbles. And the plubis and grumbo are shaved away.

That leaves you with a regular old plumbus

{% end %}

*Plumbus documentation* is what I call documentation that is very precise and accurate,
and yet, because of lack of background explanation, utterly useless because it
*lacks the context necessary to understand it*.

The instructions above are very clear. They outline what you're supposed to do,
and in the order you're supposed to do them in. And yet, I still have no idea
of what to do, because I have no idea what a "dinglebop," "fleeb," or "grumbo" is!
I lack the necessary *context* to make sense of the detailed information in front
of me.

And that's the joke. "Everyone has a plumbus in their home." How dumb can you be
if you don't know what a plumbus is, or what it's used for? Except it isn't
helpful for beginners trying to figure something out.

A good example of this is the Nix documentation. Everything is thoroughly documented...
somewhere. But where?? I can easily find detailed instructions for an `XYZ` function
which I don't understand, but it references so many other things and assumes so
much background knowledge a beginner is soon lost in a tangled web of docs, just
trying to understand what sort of expression a *flake* is supposed to evaluate to.

This is a problem well-described by Peter Naur in his 1985 essay, ["Programming as
Theory Building"](https://pablo.rauzy.name/dev/naur1985programming.pdf). A program's
source code should not (and indeed, if it is to be of any use to us mere mortals,
cannot) be seen as just instructions for a computer to execute.
Code is a marvelous abstraction that lets us communicate *to human readers* how
we intend our code to run on the computer . It is a form of
technical writing that happens to be written in such a way that a computer can
execute it. And as anyone who has written a Software Design Specification can
attest, technical writing is easy to pick up, but **hard** to master.

Part of this difficulty is bringing everyone into the same context.
Context matters. When someone at a party says to another guest, "I didn't think
I'd see you here," it can have completely different meanings depending on the
relationship between the two: context. An outsider might eventually be able to
deduce the relationship based on a constellation of context clues, but far more
useful to a newcomer has a guide to orient them in this new world of social
connections.

When analyzing a piece of literature, one of the first things I want to know is
the context in which it was written. Who wrote the piece and when? What were
their political and philosophical views? What was the history surrounding the
author's life and perspective? Was this a commentary on contemporary events?

The same questions apply to program documentation, although relevant context is
often answers markedly differnt questions than the literary context poses. What
systems was this designed to work with? On what layers? What interactions are
expected, not expected, or specifically forbidden? What programs or libraries
are expected to be present? Environment variables? What about configuration
files? One might argue that the whole reason for the modern containerization
movement is to standardize program context from a machine's point of view. But
what about from a human's point of view?

Humans want to know various questions of context too. They want to know what the
expected system usage was, what layers it interacts with and/or operates on,
as well as allowed, expected, and forbidden inputs, etc. But humans also want to
be caught up on the lingo of the program usage. Most tech-saavy users want to
know what makes up the "documentation" for the program as well.

> If parts of your documentation are hard for the reader to find, they might as
> well not exist.

When others interact with code, they want documentation. But what do we mean by
that? Certainly not just plumbus documentation. There is a place for a detailed
reference with all the minutiae. But for a novice to a software system, being
thrown into such details without any idea of how things fit together -- without
being drawn into the *theory* behind the software: its general structure, purpose,
methodology, expectations, conventions, etc -- is less than helpful; it's actively
harmful. How many beginners are intimidated, then frustrated, then discouraged from
going any further by a lack of good, theory-conveying documentation?

Beyond Peter Naur's thoughts on theory building, Daniele Procida has another
model for classifying documentation's level of detail and its intended audience
in her website, [Diataxis](https://diataxis.fr/). I recommend everyone who writes
documentation even a little bit go read that page in its entirety.

Plumbus documentation is lacking on the acquisition axis of the diataxis matrix.
Being sure that your reader can get up to speed with the current state of your
code is essential to acquisition. For a software project, this includes where it
came from (the problem that it's trying to solve: its *raison d'être*), where
it's going (long-term project goals, and how it fits into the overall architecture
of whatever your team is building), as well as a general idea of how it
accomplishes that journey.

So please don't write plumbus documentation. Instead, explain what you're
doing so that a newcomer to the project knows what's going on and how to
accomplish their goals. Write these introductory documents with newcomers in
mind, and make use of their input when they get assigned to your team! They know
better than anyone what gaps a neophyte to Project ABC has. Once you use your
newest team members as the resource they are, your documentation allows your
team to work faster and more efficiently together.
