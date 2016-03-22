# is-instance

check if a value is an instance. (typeof object or function)

## Usage

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