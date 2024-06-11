const Immutable = require('immutable');

export const map = Immutable.Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas'
});

export const map2 = map.withMutations(m => {
  m.set(2, 'Benjamin');
  m.set(4, 'Oliver');
});
