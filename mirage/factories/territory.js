import { Factory, faker  } from 'ember-cli-mirage';

export default Factory.extend({

  name(i) {
    return `Area ${i}`;
  },

  representative() {
    return faker.name.findName();
  }
  
});