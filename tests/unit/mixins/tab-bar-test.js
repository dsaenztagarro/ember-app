import Ember from 'ember';
import TabBarMixin from '../../../mixins/tab-bar';
import { module, test } from 'qunit';

module('Unit | Mixin | tab bar');

// Replace this with your real tests.
test('it works', function(assert) {
  var TabBarObject = Ember.Object.extend(TabBarMixin);
  var subject = TabBarObject.create();
  assert.ok(subject);
});
