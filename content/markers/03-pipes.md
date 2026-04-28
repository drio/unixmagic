---
title: "Pipes"
number: "3"
position:
  left: "45%"
  top: "24%"
description: "Connect command outputs to command inputs to build pipelines"
---

[Pipes](https://en.wikipedia.org/wiki/Pipeline_(Unix)) let you connect
the output of one command to the input of another using the `|`
character. Instead of saving intermediate results to files, you chain
commands together: `ls | grep txt | wc -l`. Each program reads from the
previous one's output and writes to the next one's input.

Doug McIlroy pushed for pipes at Bell Labs, and they became one of the
ideas that defined the Unix philosophy: write small programs that do
one thing, then combine them.
