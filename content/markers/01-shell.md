---
title: "Shell"
number: "1"
position:
  left: "40%"
  top: "69%"
description: "The command line, and an ordinary program anyone could replace"
date: 2025-02-13T12:00:00Z
lastmod: 2025-02-13T12:00:00Z
---

The shell gets a prominent spot on the poster because it is the center of how
you use Unix: you type commands, launch programs, chain them together with
pipes, and tell the system what to do. What set it apart is that the shell is
an ordinary program, not part of the kernel, so anyone could write a better
one. In their [1974 paper](https://web.archive.org/web/2012/http://cm.bell-labs.com/cm/cs/who/dmr/cacm.html),
Ritchie and Thompson put it this way: because the shell runs as "an ordinary,
swappable user program", it "may be made as powerful as desired at little
cost."

People did write better ones. The first Unix shell was the
[Thompson shell](https://en.wikipedia.org/wiki/Thompson_shell) (`sh`), written
by Ken Thompson for the earliest versions of Unix in 1971. It handled command
execution, redirection, and pipes, but wasn't a real programming language. The
[Mashey shell](https://en.wikipedia.org/wiki/PWB_shell) and Bill Joy's
[`csh`](https://en.wikipedia.org/wiki/C_shell) came next, both adding scripting
features (see [#14](#annotation-14-shell-script)). Then in 1979, Stephen
Bourne's [`sh`](https://en.wikipedia.org/wiki/Bourne_shell) shipped with
Version 7 Unix and became the template everything else (`ksh`, `bash`, `zsh`)
built on.
