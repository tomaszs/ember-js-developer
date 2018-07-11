import Route from '@ember/routing/route';

export default Route.extend({
	model: function()
	{
		return this.store.findAll('territory', {include: 'lawyers'});
	},
	setupController(controller, model )
	{
		controller.set("model", model);
	}
});
