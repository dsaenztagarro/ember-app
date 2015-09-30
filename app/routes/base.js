import Ember from 'ember';

/**
 * BaseRoute is the base class for all routes
 *
 * @private
 * @class BaseRoute
 */
export default Ember.Route.extend({
  menuService: Ember.inject.service('menu'),
  cacheService: Ember.inject.service('cache')
});
