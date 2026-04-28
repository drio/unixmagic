---
title: "Backpressure"
number: "7"
position:
  left: "11%"
  top: "22%"
description: "What happens when the producer is faster than the consumer"
---

When two processes talk over a pipe, one is producing data and the other
is consuming it. The kernel holds a small buffer in between. If the
producer gets ahead, the buffer fills, and the kernel blocks the
producer's next `write` until the consumer drains some space. That's
backpressure: the slow side telling the fast side to wait.

Whether the valve on the poster's pipe is a deliberate nod to this or
just a nice bit of plumbing, I'll leave to you.
