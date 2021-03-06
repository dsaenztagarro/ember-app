import Ember from 'ember';
import config from './config/environment';
import imageServiceRouter from 'ember-image-service/router';
import pollServiceRouter from 'ember-poll-service/router';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('main', function() {
  });
  this.route('communication');
  this.route('content', function() {
    imageServiceRouter(this);
    pollServiceRouter(this);
  });
  this.route('login');
});

export default Router;
