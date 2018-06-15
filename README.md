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

* Generating Templates

```bash
$ THEME=YOUR_CHOSEN_THEME npm run gen-templates
```

# Author

[Jonathan Bitgood](https://twitter.com/confirmed)

# License

[MIT](https://github.com/confirmed/world-factbook/blob/master/LICENSE)