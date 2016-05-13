
isConstructor = require "isConstructor"
Validator = require "Validator"
wrongType = require "wrongType"

{ isNaN } = global

module.exports = Validator "Nan",

  test: (value) ->
    return no if isConstructor value, Number
    return isNaN value

  assert: (value, key) ->
    return if @test value
    wrongType this, key
