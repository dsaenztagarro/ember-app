import Ember from 'ember';

export default Ember.Route.extend({
  cacheService: Ember.inject.service('cache'),
  photosService: Ember.inject.service('photos'),
  model: function() {
    return this.get('photosService').fetchAll();
  }
});
