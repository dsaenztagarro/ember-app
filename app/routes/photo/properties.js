import Ember from 'ember';

export default Ember.Route.extend({
  cacheService: Ember.inject.service('cache'),
  model: function() {
    return this.get('cacheService').get('photo');
  }
});
