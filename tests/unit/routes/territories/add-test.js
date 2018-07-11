import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | territories/add', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:territories/add');
    assert.ok(route);
  });
});
