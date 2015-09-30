import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    select(tool) {
      this.sendAction('selectTool', tool);
    }
  }
});
