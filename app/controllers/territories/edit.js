import Controller from '@ember/controller';

export default Controller.extend({
	actions:
	{
		submit: function()
		{
			var model = this.get('model');
			var self = this;
			model.save().then(function()
			{
				self.transitionToRoute('territories');
			});
		}
	}
});
