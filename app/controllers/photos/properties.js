import Ember from 'ember';

export default Ember.Controller.extend({
  photosController: Ember.inject.controller('photos'),
  photo: Ember.computed.reads('photosController.photo')
});
