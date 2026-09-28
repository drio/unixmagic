---
title: "Daemons"
number: "8"
position:
  left: "66%"
  top: "29%"
description: "Background processes that do the system's chores"
---

[Daemons](https://en.wikipedia.org/wiki/Daemon_(computing)) are long-running
background processes, usually started at boot, that do the system's chores:
`cron` runs scheduled jobs, `syslogd` collects log messages, `sshd` accepts
logins. On Unix they are ordinary processes, not part of the kernel, so you can
stop, restart, or replace a service without rebooting the machine.

The name comes from MIT's Project MAC around 1963. Fernando Corbató's team
borrowed it from Maxwell's demon, the imaginary being in physics that quietly
sorts molecules, for background processes that work tirelessly on system
chores. Unix daemons usually advertise it with a trailing `d`.
