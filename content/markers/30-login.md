---
title: "login"
number: "30"
position:
  left: "83%"
  top: "57%"
description: "The step between a terminal and a shell"
---

`login` is the step between a terminal and a shell. It asks for your name and
password, checks them against `/etc/passwd`, changes to your home directory,
switches the process to your `uid` and `gid`, and replaces itself with your
shell.

In Version 7 the whole chain was one process taking on new programs. `init`
forked a `getty` for each terminal line listed in `/etc/ttys`. `getty` set up
the line, printed `login:`, and `exec`ed `login` with the name you typed, and
`login` in turn `exec`ed your shell. Your shell ended up with the process ID
`init` had given `getty`, a neat example of the fork/exec split (see
[#13](#annotation-13-fork)).

Those terminals were physical, wired to serial lines or reached by modem.
Today you usually get a **pseudo-terminal** from a terminal emulator or from
`sshd`, which does `login`'s checks itself.
