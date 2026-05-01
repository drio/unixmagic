---
title: "login"
number: "30"
position:
  left: "83%"
  top: "57%"
description: "The gateway into the system"
---

`login` authenticates the user, sets up the environment by changing to the
user's home directory, and spawns a shell running as that user (with their
`uid` and `gid`).

Standard input and output are attached to a terminal — a **pseudo-terminal**
when you're in a graphical session or connected over `ssh`, or a **physical
terminal** back when people actually dialed in.
