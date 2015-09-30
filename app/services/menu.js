import Ember from 'ember';

var config = {
  'application': [
    {
      name: 'communication',
      routeName: 'application.communication'
    }, {
      name: 'content',
      routeName: 'application.content'
    }
  ]
};

export default Ember.Service.extend({
  init() {
    this.set('config', config);
  },

  getTabs(route) {
    return this.get('config')[route.routeName];
  }

});
