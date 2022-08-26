---
sidebar_position: 1
---

# Docker

Tailslide provides a simple out-of-the-box deployment strategy, which will spin up all components of Tailslide on a single server within a Docker Network.

To deploy Tailslide with Docker, first clone the docker branch from GitHub, then ensure the appropriate configuration files are present, and pass in an `SDK_KEY` argument along with the `docker-compose up` command.

<div style={{textAlign: 'center'}}>
  <img src={require('./../assets/dockerDeployment.svg').default} alt='Gif of Docker Deployment' />
</div>