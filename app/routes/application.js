import Ember from 'ember';
import BaseRoute from 'webapp/routes/base';
import TabbableMixin from 'ember-components/mixins/tab-bar';

export default BaseRoute.extend(TabbableMixin, {
  siteService: Ember.inject.service('site'),

  model() {
		var tabs = this.get('menuService').getTabs(this);
    var menuTools = this.get('siteService').getMenuTools();
    var context = {
      tabs: tabs,
      menuTools: menuTools
    };
    return context;
  },

  actions: {
    selectTab(tab) {
      this.transitionTo(tab.routeName);
    },
    selectTool(tool) {
      this.transitionTo(tool.routeName);
    }
  }
});
