import Ember from 'ember';
import TabBarMixin from 'webapp/mixins/tab-bar';

export default Ember.Controller.extend(TabBarMixin, {
  photos: Ember.computed.reads('model.photos'),
  photo: Ember.computed.reads('model.photo'),
  actions: {
    selectImage(photo) {
      this.set('photo', photo);
    }
  }
});
