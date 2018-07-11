import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('territories');
  this.route('territory', {path: '/territory/:territory_id' } );
  this.route('territories.add');
  this.route('territories.edit', {path: '/territory/edit/:territory_id' });
  this.route('lawyer', {path: '/lawyer/:lawyer_id'});
});

export default Router;
