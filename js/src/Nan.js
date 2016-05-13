var Validator, isConstructor, isNaN, wrongType;

isConstructor = require("isConstructor");

Validator = require("Validator");

wrongType = require("wrongType");

isNaN = global.isNaN;

module.exports = Validator("Nan", {
  test: function(value) {
    if (isConstructor(value, Number)) {
      return false;
    }
    return isNaN(value);
  },
  assert: function(value, key) {
    if (this.test(value)) {
      return;
    }
    return wrongType(this, key);
  }
});

//# sourceMappingURL=../../map/src/Nan.map
