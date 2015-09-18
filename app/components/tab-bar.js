import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    select(tab) {
      this.sendAction('select', tab);
    }
  }
});
