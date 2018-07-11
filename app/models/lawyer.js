import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	secondname: DS.attr('string'),
	territory: DS.belongsTo('territory')
});
