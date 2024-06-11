const Immutable = require('immutable');

export function mergeDeeplyElements(page1, page2) {
  return Immutable.fromJS([page1, page2]).reduce((acc, page) => {
    return acc.mergeDeepWith((prev, next) => {
      if (Immutable.Map.isMap(prev) && Immutable.Map.isMap(next)) {
        return mergeDeeplyElements(prev.toJS(), next.toJS());
      } else {
        return next;
      }
    }, acc);
  }, Immutable.Map());
}
