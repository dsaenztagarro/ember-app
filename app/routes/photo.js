import Ember from 'ember';

export default Ember.Route.extend({
  photosService: Ember.inject.service('photos'),

  model: function() {
    return {
      photos: this.get('photosService').fetchAll(), /* the list of photos */
      photo: null /* current photo selected on list */
    };
  },

  setupController(controller, model) {
    controller.set('model', model);
    controller.set('photos', model.photos);
    controller.set('photo', model.photo);
  }
});
