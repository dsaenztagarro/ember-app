import Ember from 'ember';

export default Ember.Controller.extend({
  photos: function() {
    return this.get('model').photos;
  }.property('model'),

  actions: {
    selectTab(tab) {
      this.transitionToRoute(tab.routeName);
    },
    selectImage(photo) {
      this.get('cacheService').add('photo', photo);
      this.transitionToRoute('photo.properties', photo.id);
    }
  }
});
