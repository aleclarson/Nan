
# Nan v1.1.1 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

A [`Validator`](https://github.com/aleclarson/Validator) that passes only for `NaN` values.

```coffee
Nan = require "Nan"

Nan.test 0   # => false

Nan.test NaN # => true

# Since using `isType` with the built-in Number constructor allows NaN values, we need a validator that is the exact opposite of `Nan`.
{Number} = Nan

Number.test 0   # => true

Number.test NaN # => false
```
