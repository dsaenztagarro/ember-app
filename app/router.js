import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('photos', function() {
    });
		this.route('photo', { path: '/photo/:photo_id' }, function() {
        this.route('properties');
        this.route('crops');
		});
    this.route('search');
    this.route('upload');
});

export default Router;
