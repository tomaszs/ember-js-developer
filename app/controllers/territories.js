import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
	actions:
	{
		delete(territory)
		{
			territory.destroyRecord();
		}
	},
	
	nameFilter: '',
	
	filteredTerritories: computed('model.[]', 'nameFilter', function()
	{
		var self = this;
		return this.get('model').filter(function(territory)
		{
			return self.get("nameFilter") == "" || territory.name.indexOf(self.get("nameFilter")) != -1;
		})
	})
});
