import Route from '@ember/routing/route';

export default Route.extend({
	model: function(params)
	{
		return this.store.find("territory", params.territory_id).then(function(territory)
		{
			return territory;
		});
	},
	setupController: function(controller, model)
	{
		controller.set('model', model);
	}
});
