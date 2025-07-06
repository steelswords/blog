+++
title = "Linux Tools I Cannot Live Without"
date = 2025-07-06
description = "These are my ingredients for a happy, productive time with Linux"

[taxonomies]
tags = ["linux", "opinions"]
+++

# Linux Tools I Could Not Live Without
You know the scenes -- usually on some cheesy but binge-able crime-fighting show 
-- where the "tech guy" starts typing furiously, keys flying over their keyboard,
as they bring up and process all sorts of information? I used to think that was
Hollywood hyperbole until I started using some of the tools in this list. I
swear, they make the point-and-click mode of computing that Windows forces on
you completely unbearable.

These tools are why I will never leave Linux. Full stop. And why I will complain
loudly about using any other OS. This setup is top notch at reducing workflow
friction and gives me so much pleasure in being able to interface more naturally
with my computers. The fewer annoying obstacles you have in your process, the
faster and better you are able to achieve a flow state, and that's what these
tools enable for me.

## Text Editor: (Neo)Vim
Honestly, learning Vim was one of the best things I could do for decreasing the
friction in my workflow. Being able to train muscle memory to "jump over here"
"replace just that word", or "back up to the beginning of the line" without
fumbling for the "Home" key or the mouse has been a game changer. It is also a
sort of gateway drug for everything else you see here. I'm on this path today
because I invested time in learning how to be efficient with Vim.

### Neovim versus Vim
I used Vim for years with no issues. Pros: the packages in most distro repos are
up-to-date enough for everything I needed. It wasn't until I found the Telescope
plugin, which doesn't support original Vim, that I switched to Neovim.

Since then, there have been hiccups with the Neovim package, I'll admit. The
version in the Ubuntu repos is often too outdated and incompatible with some of
the plugins I like to use. (Ubuntu 24.04, for example, packages neovim 0.9.5,
while the latest release is 0.11.2. Go figure.)

This has lead me to some interesting solutions, which may be summarized by me
saying that I periodically build and install the latest version of Neovim. This
is a minor issue for me at this point, and the build process has been moderately
painless so far.

You know it's good stuff when the only downside is you're sad when you can't. It
doesn't interfere with friends or family or a happy life or any of the caveats
of addiction, it just makes using my computers (something I happen to do an
awful lot) a boatload more fun!

## Browser Plugins
### A vim-like navigation plugin
Being able to navigate webpages and links without leaving my keyboard is a
tremendous powerup! I can't properly express how awesome it is. Just trust me,
being able to navigate the web from the keyboard is a life-changing experience.

## A terminal multiplexer: tmux
tmux is a game changer. I was first introduced to it as a way to start programs I
started on my Raspberry Pi via SSH and keep them running even after I logged out
of SSH (or lost connection when I went somewhere else, as I just had one laptop
in those days. Ah, college...).

I still use tmux for this purpose, but it is so much more! It's like having tabs
for your terminal emulator. I know some terminal emulators, like Kitty and
Terminator, have tabs built in, but I will say I like the tmux approach better.

After learning under a dozen keystrokes, you can tab between windows, split your
terminal into multiple panes, and navigate between them all seamlessly.

There is so much more you can do with tmux too. The man pages are extensive.

## A tiling window manager

This was such a pivotal development in my Linux journey. By this point I had
already started using tmux, vim, and vim keybindings in my browser. This helped
me put everything together in such a sweet, sweet way! I don't need to leave my
keyboard for the vast, vast majority of tasks!

## A decent shell: zsh

This is a little opinionated (not like everything else above, of course /j).
Bash is definitely an improvement on more barebones POSIX shells, like sh,
ash, and dash. I actually try to do all my shell scripting in the bash
dialect for its relatively complete features and ubiquity. But for a daily
driver, it's kind of lacking. I have found zsh to be much more user-friendly for
me.

While bash has a completion system, zsh's is more configurable and was easier
for me to use.

Zsh has greatly improved globbing functionalities. And better auto-completion
out of the gate.

If you're into shell scripting, Zsh also has better array syntax and
features.

The plugin system for Zsh is much more mature and widely used.

Zsh has commands for directly interacting with TCP ports, opening connections,
etc.

Zsh also has syntax for mass renaming/moving/copying/linking files.

For more information that might convince you, see [this Stack Exchange
post](https://apple.stackexchange.com/questions/361870/what-are-the-practical-differences-between-bash-and-zsh/361957#361957)
