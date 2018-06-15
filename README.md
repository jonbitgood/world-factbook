# world-factbook.js

This package allows the easy parsing of the public domain world factbook 
information from the CIA either (coming soon) via API or an offline set of JSON files.

# Installation

Install package

```bash
$ npm install --save world-factbook
```

# Usage

Append the complete factbook collection to an element

```js
var worldFactbook = new WorldFactbook();
worldFactbook.renderHTML(false, profile.dataset.id).then(function(rendered) {
    $('#country-profile').append(rendered);
});
```

# Development

* Cloning the repo

```bash
$ git clone https://github.com/confirmed/world-factbook.git
```

* Installing dependencies

```bash
$ npm install
```

* Running scripts

| Action                                   | Usage               |
| ---------------------------------------- | ------------------- |
| Starting development mode                | `npm start`         |
| Linting code                             | `npm run lint`      |
| Running unit tests                       | `npm run jest`      |
| Running code coverage                    | `npm run coverage`  |
| Running lint + tests                     | `npm test`          |
| Sending coverage results to Coveralls.io | `npm run coveralls` |

# Author

[Jonathan Bitgood](https://twitter.com/confirmed)

# License

[MIT](https://github.com/confirmed/world-factbook/blob/master/LICENSE)