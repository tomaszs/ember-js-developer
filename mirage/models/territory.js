import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
	lawyers: hasMany('lawyer')
});
