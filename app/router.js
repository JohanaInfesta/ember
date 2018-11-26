import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('search-results');
  this.route('search');
  this.route('personaje', {path:'/personaje/:personaje_id'});
});

export default Router;
