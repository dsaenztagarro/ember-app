import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log('application#route');
  },

  actions: {
    selectTab(tab) {
      this.transitionTo(tab.routeName);
    },
  }
});
