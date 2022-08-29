---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SDK for Tailslide

---

## Installation

---

Install the Tailslide npm package with `npm install tailslide`

## Basic Usage

---

### Instantiating and Initializing FlagManager

The `FlagManager`class is the entry point of this SDK. It is responsible for retrieving all the flag rulesets for a given app with its `appId` and creating new `Toggler` instances to handle toggling of feature flags within that app. To instantiate a `FlagManager` object, a user must provide a configuration object:

<Tabs>
<TabItem value="js" label="JavaScript">

```js
const FlagManager = require('tailslide');

const config = {
  natsServer: 'nats://localhost:4222',
  natsStream: 'flags_ruleset',
  appId: 1,
  userContext: '375d39e6-9c3f-4f58-80bd-e5960b710295',
  sdkKey: 'myToken',
  redisHost: 'http://localhost',
  redisPort: 6379,
};

const manager = new FlagManager(config);
await manager.initialize();
```

</TabItem>
<TabItem value="py" label="Python">

```py
import asyncio
from tailslide import FlagManager

config = {
    "nats_server": "nats://localhost:4222",
    "nats_stream": "flags_ruleset",
    "app_id": 1,
    "user_context": "375d39e6-9c3f-4f58-80bd-e5960b710295",
    "sdk_key": "myToken",
    "redis_host": "http://localhost",
    "redis_port": 6379,
}

async def main():
    manager = FlagManager(**config)
    await manager.initialize()

asyncio.run(main())
```
</TabItem>
<TabItem value="rb" label="Ruby">

```rb
require "async"
require('tailslide')

config = {
    nats_server: "nats://localhost:4222",
    nats_stream: "flags_ruleset",
    app_id: 1,
    user_context: "375d39e6-9c3f-4f58-80bd-e5960b710295",
    sdk_key: "myToken",
    redis_host: "http://localhost",
    redis_port: 6379,
}

Async do |task|
    manager = FlagManager.new(**config)
    manager.initialize_flags

end
```

</TabItem>
<TabItem value="go" label="Golang">

```go
import (
	tailslide "github.com/tailslide-io/tailslide.go"
)

func main(){
  config := tailslide.FlagManagerConfig{
    NatsServer:  "nats://localhost:4222",
    NatsStream:  "flags_ruleset",
    AppId:       "1",
    UserContext: "375d39e6-9c3f-4f58-80bd-e5960b710295",
    SdkKey:      "myToken",
    RedisHost:   "http://localhost",
    RedisPort:   "6379",
  }

  manager := tailslide.NewFlagManager(config)
  manager.InitializeFlags()
}
```

</TabItem>
</Tabs>

- `natsServer` is the NATS JetStream server `address:port`
- `natsStream` is the NATS JetStream’s stream name that stores all the apps and their flag rulesets
- `appId` is the ID number of the app the user wants to retrieve its flag ruleset from
- `userContext` is the UUID string that identifies the current user
- `sdkKey` is the SDK key for the Tailslide, it is used as a password for NATS JetStream token authentication
- `redisHost` is the address to the Redis database
- `redisPort` is the port number that the Redis database runs on

After instantiating a `FlagManager`, invoke the `initialize` method. This method connects the `FlagManager` instance to both NATS JetStream and Redis Timeseries, and asynchronously retrieves the latest and any new flag ruleset data.

---

### Using Feature Flag with Toggler

Once the `FlagManager` is initialized, it can create a `Toggler`, with the `newToggler` method, for each feature flag that the developer wants to wrap the new and old features in. A `Toggler`’s `isFlagActive` method checks whether the flag with its `flagName` is active or not based on the flag ruleset. A `Toggler`’s `isFlagActive` method returns a boolean value, which can be used to evaluate whether a new feature should be used or not.


<Tabs>
<TabItem value="js" label="JavaScript">

```js
const flagConfig = {
  flagName: 'App 1 Flag 1',
};

const flagToggler = manager.newToggler(flagConfig);

if (flagToggler.isFlagActive()) {
  // call new feature here
} else {
  // call old feature here
}
```

</TabItem>
<TabItem value="py" label="Python">

```py
flag_config = {
    "flag_name": 'App 1 Flag 1',
}

flag_toggler = manager.new_toggler(flag_config)

if flag_toggler.is_flag_active():
    # call new feature here
else:
    # call old feature here
```

</TabItem>
<TabItem value="rb" label="Ruby">

```rb
flag_config = {
    flag_name: 'App 1 Flag 1',
}

flag_toggler = manager.new_toggler(flag_config)

if flag_toggler.is_flag_active
    # call new feature here
else
    # call old feature here
end
```

</TabItem>
<TabItem value="go" label="Golang">

```go
flagConfig := tailslide.TogglerConfig{
  FlagName: "App 1 Flag 1",
}

flagToggler, err := manager.NewToggler(flagConfig)
if flagToggler.IsFlagActive() {
  // call new feature here
} else {
  // call old feature here
}
```

</TabItem>
</Tabs>


---

### Emitting Success or Failture

To use a `Toggler` instance to record successful or failed operations, call its `emitSuccess` or `emitFailure` methods:

<Tabs>
<TabItem value="js" label="JavaScript">

```js
if (successCondition) {
  await flagToggler.emitSuccess();
} else {
  await flagToggler.emitFailure();
}
```

</TabItem>
<TabItem value="py" label="Python">

```py
if successCondition:
    flag_toggler.emit_success()
else:
    flag_toggler.emit_failure()
```

</TabItem>
<TabItem value="rb" label="Ruby">

```rb
if successCondition
    flag_toggler.emit_success
else
    flag_toggler.emit_failure
end
```

</TabItem>
<TabItem value="go" label="Golang">

```go
if successCondition {
  flagToggler.EmitSuccess()
} else {
  flagToggler.EmitFailure()
}
```

</TabItem>
</Tabs>

## Documentation

---

For language specific documentation, please see README files at the following links:

JavaScript: https://github.com/tailslide-io/tailslide.js

Ruby: https://github.com/tailslide-io/tailslide.rb

Python: https://github.com/tailslide-io/tailslide.py

Golang: https://github.com/tailslide-io/tailslide.go