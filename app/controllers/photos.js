import Ember from 'ember';

export default Ember.Controller.extend({
  cacheService: Ember.inject.service('cache'),
  actions: {
    select(photo) {
      this.set('photo', photo);
      this.transitionToRoute('photos.properties');
    }
  }
});
