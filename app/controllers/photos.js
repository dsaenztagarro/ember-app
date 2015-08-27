import Ember from 'ember';

export default Ember.Controller.extend({
  cacheService: Ember.inject.service('cache'),
  actions: {
    select(photo) {
      this.get('cacheService').add('photo', photo);
      console.log(photo);
      this.transitionToRoute('photos.properties');
    }
  }
});
