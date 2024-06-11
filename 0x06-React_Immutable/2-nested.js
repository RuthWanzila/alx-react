const Immutable = require('immutable');

export default function accessImmutableObject(object, array) {
  try {
    const immutableObject = Immutable.fromJS(object);
    return Immutable.getIn(immutableObject, array);
  } catch (error) {
    return undefined;
  }
}
