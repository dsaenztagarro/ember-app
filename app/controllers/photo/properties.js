import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    selectImage(photo) {
      this.get('cacheService').add('photo', photo);
      this.transitionToRoute('photo.properties', { photo_id: photo.id });
    }
  }
});
