import Ember from 'ember';

export default Ember.Route.extend({
  photosService: Ember.inject.service('photos'),
  model() {
    return {
      photos: this.get('photosService').fetchAll(), /* the list of photos */
      photo: null /* current photo selected on list */
    };
  },
  tabs() {
    this.get('menuService').get(this.routeName);
  }
});
