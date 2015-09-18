import Ember from 'ember';

export default Ember.Mixin.create({
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('tabs', model.tabs);
  }
});
