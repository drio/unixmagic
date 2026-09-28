---
title: "troff"
number: "17"
position:
  left: "70.5%"
  top: "82%"
description: "A program for formatting documents in the Unix document processing system"
---

[Troff](https://en.wikipedia.org/wiki/Troff) is the typesetter in Unix's
document-processing pipeline, and text formatting is how Unix found its first
real users. To justify buying a PDP-11, the Unix group at Bell Labs promised
the patents department a system for preparing patent applications. The machine
arrived, the patent department adopted it, and Unix had users outside the
research lab.

When Bell Labs bought a Graphic Systems CAT phototypesetter, Joe Ossanna
extended his `nroff` (see [#24](#annotation-24-jfo-nroff)) to drive it, with
multiple fonts and proportional spacing. The name stands for "typesetter roff".
Its output was good enough that reviewers sometimes assumed troff manuscripts
had already been published.

After Ossanna died in 1977, Brian Kernighan rewrote troff to produce
device-independent output that a small driver could translate for any printer.
GNU's reimplementation, `groff`, still renders the `man` pages on most systems.
