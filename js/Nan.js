var Nan, Validator, isConstructor, wrongType;

isConstructor = require("isConstructor");

Validator = require("Validator");

wrongType = require("wrongType");

Nan = Validator("Nan", {
  test: function(value) {
    if (!isConstructor(value, Number)) {
      return false;
    }
    return global.isNaN(value);
  },
  assert: function(value, key) {
    if (this.test(value)) {
      return;
    }
    return wrongType(this, key);
  }
});

Nan.Number = Validator("Number", {
  test: function(value) {
    if (global.isNaN(value)) {
      return false;
    }
    return isConstructor(value, Number);
  },
  assert: function(value, key) {
    if (this.test(value)) {
      return;
    }
    return wrongType(Number, key);
  }
});

module.exports = Nan;

//# sourceMappingURL=map/Nan.map
