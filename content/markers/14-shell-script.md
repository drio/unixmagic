---
title: "Shell script"
number: "14"
position:
  left: "44.5%"
  top: "90%"
description: "The shell as a programming language"
---

Shell scripts are what made Unix administration practical. A
[shell script](https://en.wikipedia.org/wiki/Shell_script) is a text file of
shell commands that runs as a program: instead of typing commands one at a
time, you write them into a file and execute it.

The idea follows from the shell being an ordinary command. The 1974 Unix paper
already shows `sh <tryout` running a file of commands in sequence. Because the
shell knows how to run programs, redirect I/O, and connect pipes, a script gets
all of that for free. Add variables, loops, and conditionals, and you have a
real programming language tightly integrated with the operating system.

System startup, backups, log rotation, batch processing: all of it was (and
still is) driven by shell scripts.
