import Ember from 'ember';

export default Ember.Controller.extend({
  photos: Ember.computed.reads('model.photos'),
  photo: Ember.computed.reads('model.photo'),
  actions: {
    selectImage(photo) {
      this.set('photo', photo);
    }
  }
});
