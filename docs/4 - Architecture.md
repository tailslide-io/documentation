---
sidebar_position: 4
---

# Architecture

Tailslide’s architecture was built to facilitate two major uses: the feature flag ruleset data transmission and automated circuit breaking. 

There are Three key pieces of Tailslide’s architecture created by the team. These include: 

1. **Tower** - a full-stack application that handles the CRUD functionality related to feature flag management  
3. **Tailslide SDKs** - provides user microservices with flag state to ensure appropriate logic evaluation at runtime and emission of circuit-breaking data
4. **Aerobat** - a lightweight Node application responsible for all circuit-breaking logic

Tailslide also utilizes the following open-source software: NATs JetStream, PostgreSQL, and Redis Timeseries Database.