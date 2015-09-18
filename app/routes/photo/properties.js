import Ember from 'ember';

export default Ember.Route.extend({
  photosService: Ember.inject.service('photos'),

  model: function() {
    return {
      photo: this.get('cacheService').get('photo') /* current photo selected on list */
    };
  },

  actions: {
    selectImage(photo) {
      this.get('cacheService').add('photo', photo);
      this.transitionTo('photo.properties', photo.id);
    }
  }
});
