import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    select(photo) {
      console.log(photo);
    }
  }
});
