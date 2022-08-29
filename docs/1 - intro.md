---
slug: /
---

# Introduction
<div style={{textAlign: 'center'}}>
  <img src="https://user-images.githubusercontent.com/73451363/187207442-bae7ea26-7eac-4cab-8806-42779629c653.png" alt="Tailslide logo" width="400" />
</div>

Welcome to Tailslide, a light-weight feature flag management tool with automated circuit-breaking.
Tailslide is a self-hosted application that can be installed on your own server and run with just a single command.

## What is Tailslide
Tailslide is an open-source, lightweight, self-hosted feature flag management solution designed for organizations with a microservices architecture to easily and safely deploy new backend features with built-in circuit-breaking.  Tailslide monitors the performance of feature flags and leverages a customizable circuit-breaking pattern to toggle off problematic features and direct users to a pre-defined fallback service or feature. If circuits trip, indicating that features are not working as intended - developers are immediately notified via a Slack notification, so they can respond appropriately. Tailslide speeds up the deployment cycle without sacrificing reliability.

Using Tailslide, developers can perform "dark launches" - allowing for experimentation of new features in a live production environment, where only internal test accounts or beta users are served the new feature. Tailslide also allows for the safe and gradual rollout of individual features to a subset of the user base, with the ability to easily ramp up, ramp down or shut off all traffic to a specified feature.

To get started with Tailslide, check out our Installation guide [here](https://tailslide-io.github.io/documentation/Getting%20Started/Installation). 