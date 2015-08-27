import Ember from 'ember';

var data = {};

export default Ember.Service.extend({
  add: function(key, value) {
    data[key] = value;
  },
  get: function(key) {
    return data[key];
  }
});
