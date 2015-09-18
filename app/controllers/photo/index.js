import Ember from 'ember';

export default Ember.Controller.extend({
  photos: Ember.computed.reads('model.photos'),
  photo: Ember.computed.reads('model.photo'),
  actions: {
    selectTab(tab) {
      this.transitionToRoute(tab.routeName);
    },
    selectImage(photo) {
      this.set('photo', photo);
      this.transitionToRoute('photo.properties', photo.id);
    }
  }
});
