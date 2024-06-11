const Immutable = require('immutable');

export function concatElements(page1, page2) {
  return Immutable.List(page1).concat(Immutable.List(page2));
}

export function mergeElements(page1, page2) {
  return Immutable.Map(page1)
    .merge(Immutable.Map(page2))
    .toList();
}
