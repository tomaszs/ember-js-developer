# Ember CLI + Ember.JS + Bootstrap + Ember CLI Mirage Demo APP

A simple app made in Ember CLI, Ember.JS, Bootstrap, Mirage with basic tests. It contains two models: territories and lawyers. Each territory can have multiple lawyers. You can add,remove,list and update territories. Display lawyers associated with a territory. Filter territories by name. Tests are included. Acceptance tests are NOT included.

JSON API (mocked):

territories (name (string), lawyers (many), representative (string))
lawyers (name, secondname - strings)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js 8.9.0](https://nodejs.org/) (with npm)
* [Ember CLI 3.2.0](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)
* [Boostrap 4.1.1] (https://getbootstrap.com/)
* [Ember ClI Mirage 0.4.7] (https://github.com/samselikoff/ember-cli-mirage)

## Installation

* `git clone <repository-url>` this repository
* `cd myapp`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


Ember CLI, Ember JS Developer