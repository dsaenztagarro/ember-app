import Ember from 'ember';

export default Ember.Route.extend({
  photosService: Ember.inject.service('photos'),

  model: function() {
    return {
      photos: this.get('photosService').fetchAll(), /* the list of photos */
      photo: this.get('cacheService').get('photo') /* current photo selected on list */
    };
  }
});
