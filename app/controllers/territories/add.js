import Controller from '@ember/controller';

export default Controller.extend({
	actions: 
	{
		submit: function()
		{
			var model = this.get('model');
			var self = this;
			var territory = this.store.createRecord('territory', {'name': model.name, 'representative': model.representative});
			territory.save().then(function(territory)
			{
				self.transitionToRoute('territory', territory.id);
			});
		}
	}
});
