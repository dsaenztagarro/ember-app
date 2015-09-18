import Ember from 'ember';

export default Ember.Route.extend({
  photosService: Ember.inject.service('photos'),

  model() {
    return Ember.RSVP.hash({
      tabs: this.get('menuService').getTabs('default'),
      photos: this.get('photosService').fetchAll(), /* the list of photos */
      photo: null /* current photo selected on list */
    });
  },

  afterModel(model, transition) {
    var photos = model.photos;
    // Select first photo by default
    if (photos.length > 0) {
      var photo = photos[0];
      this.get('cacheService').add('photo', photo);
      this.transitionTo('photo', photo.id);
    }
  },

  setupController(controller, model) {
    controller.set('model', model);
    controller.set('photos', model.photos);
    controller.set('photo', model.photo);
    controller.set('tabs', model.tabs);
  }
});
