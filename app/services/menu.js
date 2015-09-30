import Ember from 'ember';

var config = {
  'application': [
    {
      name: 'communication',
      routeName: 'communication'
    }, {
      name: 'content',
      routeName: 'content'
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
