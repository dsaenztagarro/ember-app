import Ember from 'ember';

export default Ember.Controller.extend({
  photosController: Ember.inject.controller('photos'),
  photos: Ember.computed.reads('photosController.model.photos'),
  photo: Ember.computed.reads('photosController.model.photo'),
  actions: {
    selectImage(photo) {
      this.set('photo', photo);
      this.transitionToRoute('photo.properties', photo.id);
    }
  }
});
