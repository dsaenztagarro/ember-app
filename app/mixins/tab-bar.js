import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    selectTab(tab) {
      this.transitionToRoute(tab.routeName);
    },
  }
});
