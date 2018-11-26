import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | personajes', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:personajes');
    assert.ok(route);
  });
});
