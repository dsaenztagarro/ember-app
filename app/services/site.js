import Ember from 'ember';

export default Ember.Service.extend({
  getMenuTools() {
    return {
      name: 'image-service',
      routeName: 'application.content.image-service'
    };
  }
});
