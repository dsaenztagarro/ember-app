import Ember from 'ember';

export default Ember.Service.extend({
  getMenuTools() {
    return [{
        name: 'image-service',
        routeName: 'content.image-service'
      }, {
        name: 'poll-service',
        routeName: 'content.poll-service'
      }
    ];
  }
});
