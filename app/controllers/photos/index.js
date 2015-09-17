import Ember from 'ember';

export default Ember.Controller.extend({
  cacheService: Ember.inject.service('cache'),
  actions: {
    select(photo) {
      this.set('photo', photo);
      this.transitionToRoute('photo.properties', { photo_id: photo.id });
    }
  }
});
