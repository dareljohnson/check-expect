import test from 'ava';
import 'babel-core/register';

import checkExpect from '../src/lib/';

test('checkExpect', (t) => {
  t.is(checkExpect(), true);
});
