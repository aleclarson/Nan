var Validator, isConstructor, wrongType;

isConstructor = require("isConstructor");

Validator = require("Validator");

wrongType = require("wrongType");

module.exports = Validator("Nan", {
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

//# sourceMappingURL=../../map/src/Nan.map
