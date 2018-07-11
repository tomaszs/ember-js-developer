import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	representative: DS.attr('string'),
	lawyers: DS.hasMany('lawyer', {async: false})
});
