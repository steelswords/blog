+++
title = "Connect 4 in Rust"
date = 2023-07-02
description = ""

[taxonomies]
tags = ["rust", "projects"]
+++

Link to the [Github project](https://github.com/steelswords/connect4).

As part of my Rust journey, I decided it would be good idea to write something fun.
But I knew better than to try to make an ambitious 3D project work. I don't have
time like [this poor guy](https://fourteenscrews.com/) to make something really,
really impressive with my new language. So I decided to make a TUI game. Connect
Four seemed to fit the bill really well.

I'm writing this a bit after development on my Connect Four project has concluded,
cause I've been working on a lot of projects lately and am trying desperately to get 
them on my blog to show off. 😉

Here's the final result.

{{ dimmable_image(src="img/connect4playthrough.gif", alt="A stunning upset by Player 2") }}

# Features
- Local multiplayer
- Colors...? Yep.

# Development

As you can see from the git history, I did the bulk of this work in April and May
of 2023. I had some knowledge, but was by no means a pro Rust developer when I began.
Now, I've made a lot of progress.

I used crossterm, which proved to be both powerful and not too tricky to use. I
will definitely consider using crossterm again if I develop another game for the
terminal.

## What about Single Player?

This version doesn't have an AI you can play against or remote multiplayer - yet!

Actually, in version 0.3.0 I want to add a remote multiplayer feature. I've actually
been working on a chat application to get used to serde and message passing over
sockets in Rust before I implemented this. (Article, as always, "coming soon").

As a side note, I used [t-rec](https://github.com/sassman/t-rec-rs) to record this demo. 
It is built in Rust and was very easy to use. It also elided all the still frames 
together to reduce file size.


