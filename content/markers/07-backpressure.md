---
title: "Backpressure"
number: "7"
position:
  left: "11%"
  top: "18%"
description: "Tell producers to stop sending data because the consumer cannot keep up"
---

When two processes communicate over a pipe, the process sending data is the
producer, and the process receiving data is the consumer. The OS maintains a
buffer to temporarily store data if the producer sends data faster than the
consumer can process it. However, if the buffer becomes full, the OS will block
the producer until space is available.

Was that the intention of the artist? You decide—is the valve handle in the
pipes a clever reference to UNIX back pressure, or is that a stretch?
