# is-instance

check if a value is an instance. (typeof object or function)

## Usage

```
var isInstance = require('is-instance');

//false
isInstance(null);
isInstance(2);
isInstance('hello');
isInstance(undefined);
isInstance(NaN);

//true
isInstance({});
isInstance(function(){});
```

## Why

I've used this in 4 modules. time to get DRY.