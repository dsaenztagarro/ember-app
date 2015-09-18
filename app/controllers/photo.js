import Ember from 'ember';

export default Ember.Controller.extend({
  /*
  photosController: Ember.inject.controller('photos'),
  photos: Ember.computed.reads('model.photosphotosController.model.photos'),
  photo: Ember.computed.reads('photosController.model.photo'),
  */
  photos: Ember.computed.reads('model.photos'),
  photo: Ember.computed.reads('model.photo'),
  actions: {
    selectImage(photo) {
      this.set('photo', photo);
      this.transitionToRoute('photo.properties', photo.id);
    }
  }
});
