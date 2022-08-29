---
sidebar_position: 2
---

# Environment Variables

The following examples show the default values required in a .env file to run Tower and Aerobat. This enables these applications to be run without additional configuration. The SDKs do not require .env files. Feel free to modify these examples to suit your needs.

---
Sample `.env` file to add into Tower server directory

```
PORT=3001

PGHOST='localhost'
PGUSER='postgres'
PGDATABASE='tower'
PGPASSWORD='secret'
PGPORT=5432

NATS_SERVER='nats://127.0.0.1:4222'
SDK_KEY='myToken'

REDIS_SERVER='{"socket":{"host":"localhost"}}' 
```
---

Sample `.env` file to add into Tower client directory
```
REACT_APP_NATS_WS_SERVER='ws://0.0.0.0:8080'
REACT_APP_SDK_KEY='myToken'
```
---

Sample `.env` file to add into the Aerobat root directory

```
SDK_KEY='myToken'
NATS_SERVER='nats://127.0.0.1:4222'
NATS_STREAM='flags_ruleset'
NATS_SUBJECT="apps.*.update.manual" 

REDIS_SERVER='{"socket":{"host":"localhost"}}' 
REDIS_POLL_RATE=3000
REDIS_TIME_WINDOW=3000
```