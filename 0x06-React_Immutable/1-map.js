const Immutable = require('immutable');

function getImmutableObject(obj) {
  return Immutable.Map(obj);
}

module.exports = getImmutableObject;
