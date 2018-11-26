import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | personaje', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:personaje');
    assert.ok(route);
  });
});
