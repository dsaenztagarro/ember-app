import Ember from 'ember';

export default Ember.Controller.extend({
  photosController: Ember.inject.controller('photo'),
  photos: Ember.computed.reads('photosController.model.photos'),
  photo: Ember.computed.reads('photosController.model.photo')
});
