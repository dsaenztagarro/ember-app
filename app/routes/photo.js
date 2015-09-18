import Ember from 'ember';

export default Ember.Route.extend({
  photosService: Ember.inject.service('photos'),

  model() {
    return Ember.Object.create({
      photos: this.get('photosService').fetchAll(), /* the list of photos */
      photo: this.get('cacheService').get('photo') /* current photo selected on list */
    });
  },

  afterModel(model) {
    if (model) {
      this.transitionTo('photo.properties', model.id);
    } else {
      this.transitionTo('photos');
    }
  },

  setupController(controller, model) {
    controller.set('model', model);
    controller.set('photos', model.photos);
    controller.set('photo', model.photo);
  }
});
