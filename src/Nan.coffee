
isConstructor = require "isConstructor"
Validator = require "Validator"
wrongType = require "wrongType"

module.exports = Validator "Nan",

  test: (value) ->
    return no if not isConstructor value, Number
    return global.isNaN value

  assert: (value, key) ->
    return if @test value
    wrongType this, key
