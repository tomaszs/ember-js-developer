import Route from '@ember/routing/route';

export default Route.extend({
	setupController: function(controller)
	{
		var territory = {name: '', representative: ''};
		controller.set('model', territory);
	}
});
