
isConstructor = require "isConstructor"
Validator = require "Validator"
wrongType = require "wrongType"

Nan = Validator "Nan",

  test: (value) ->
    return no if not isConstructor value, Number
    return global.isNaN value

  assert: (value, key) ->
    return if @test value
    wrongType this, key

# This validator accepts Numbers (except Nan).
Nan.Number = Validator "Number",

  test: (value) ->
    return no if global.isNaN value
    return isConstructor value, Number

  assert: (value, key) ->
    return if @test value
    wrongType Number, key

module.exports = Nan
