import Ember from 'ember';

export default Ember.Route.extend({
  cacheService: Ember.inject.service('cache'),
  photosService: Ember.inject.service('photos'),

  model: function() {
    return {
      photos: this.get('photosService').fetchAll(), /* the list of photos */
      photo: this.get('cacheService').get('photo') /* current photo selected on list */
    };
  }
});
