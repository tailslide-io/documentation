---
sidebar_position: 7
---

# Circuit Breaking

You have the option to provide automated failure protection by enabling circuit breaking on any flag. See the instructions for how to edit a flag to do so.

Circuit Breaking in Tailslide consists of these four steps:

1. Success/Failure Emission via the `emitSuccess` and `emitFailure` methods included in the SDK
2. Timeseries Data Storage
3. Error Rate and Circuit State Evaluation
4. Circuit State Change Propagation

The final three steps are taken care of automatically by Tailslide for every enabled circuit.

![Example banner](./../assets/circuitBreak.png)