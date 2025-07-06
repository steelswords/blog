+++
title = "SSH Spellbook"
date = 2025-07-06
description = "My Master Spellbook for using SSH fluently and fluidly."

[taxonomies]
tags = ["linux", "spellbook"]
+++

# The SSH Spellbook

## Basics & Theory

If you are comfortable with all of these topics, move on to the next section:
- How SSH works: Theory
- How SSH works: Practice
- SSH keys
- SSH server versus client
- Enabling SSH on various systems

## Configuration

**Remember!** `man` is your friend.

The primary configuration file your SSH client works with is located at
`$HOME/.ssh/config`. That is where most of the configuration discussed in this
section lies.


If you work with Linux systems often, you will probably spend a good deal of
your life in an SSH session. This spellbook outlines some of the things you can
do to eliminate tedium and accelerate your usage of the terminal.

## SSHing into a machine

### First, a little theory (Intermediate pupils may skip)

To SSH into another computer (what we will call the "target" machine or "remote"
machine) from your computer (what we will call "your" machine or the "host"
machine), the target machine has to be running an **SSH server**. This SSH
server listens on a port (usually 22, but it can be anything) for incoming SSH
connections. When an SSH client, like one running on your machine, tries to
connect to the remote machine, it offers up one of several methods to
authenticate to the remote machine. The two most common methods are through
a username/password combo or asymmetric cryptography. 

In the asymmetric cryptography scheme, the SSH server has a
list of public keys it trusts, and if the client proves it has the private key
associated with a trusted public key, it gets authenticated). Practical
applications of this are in the section below called [Tired of typing passwords?
Use ssh-copy-id](#tired-of-typing-passwords-use-ssh-copy-id).

The SSH server and SSH client do a separate cryptographic key exchange to ensure
that all communication between them stays private and secure. This happens
before any authentication is even attempted, to make sure passwords aren't
transmitted in the clear.

### The Basic SSH

Let's say you have a Linux host that you work with regularly. We'll call it The
Box. You happen to know lives at IPv4 address `192.168.232.4`. You might find this
IP address from your router, or from The Box itself, or by doing a ping scan of
your entire LAN subnet, etc.

The important thing is you want to log in as `steelswords` on The Box. That's
simple enough, just type:

```
ssh steelswords@192.168.232.4
```

That's not too bad, especially if you still have a number pad. You do have to
freeze the IP address allocated to The Box in your router settings, but that's
easily doable.

But that does get tedious after a while. After all, I only have a couple of
Boxes that I interact with regularly anyway. Could I shortcut this at all?

The first instinct I remember having many years ago was to define an entry in my
`/etc/hosts` file. But this only improves my typing a bit:

```
ssh steelswords@box1
```

That's not bad, but we can do better.

## Defining SSH Config entries
When you call SSH, the first thing it does with the "destination" argument
`steeslwords@box1` is it looks in various config files for any definitions of
`box1`. In the above example, it doesn't find any, so then goes to the operating
system to resolve the host `box1`.

But we can shortcut this process by defining an SSH `Host` entry

Use your favorite editor (should be vim, but I don't judge) to edit
`~/.ssh/config` and add:

```ssh
Host box1
    Hostname 192.168.232.4
    User steelswords
```

This lets us now run an incredibly shorter command to SSH into The Box:

```sh
ssh box1
```

## Tired of typing passwords? Use ssh-copy-id

But you still have to enter the password manually. Well, here's where the magic
comes in. Remember the cryptographic authentication we discussed in "First,
a little theory"? `ssh-copy-id` is a script that copies your SSH public key (generated
in the section below) to a server, so you don't have to manually type any more
passwords (provided that your SSH key doesn't need a password to unlock).

To cast this spell, run:

```sh
ssh-copy-id box1
```

It will prompt you for the password once, and then copy your public key over to
authenticate against next time.

## Generating an SSH key
Generating a key to use with SSH is easy. Just run
```sh
ssh-keygen
```

And follow the prompts. If you are okay with anyone who gets a hold of your
private key having access to all the hosts you copy your public key to, don't
set a password. I would say in most developer instances setting a password is not
necessary. It just adds that extra layer of security through something you know.
But it also makes you enter that password whenever you use the key, which can be
cumbersome if your development machine is sufficiently secured anyway.
