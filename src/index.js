/*!
 *  WorldFactbook.js for World Factbook in JavaScript.
 *
 *  @version 1.1.0
 *  @license MIT https://github.com/confirmed/WorldFactbook.js/blob/master/LICENSE
 *  @site    https://github.com/confirmed/WorldFactbook.js
 *  @author  Jonathan Bitgood <jon@dbs.org>
 */

(function(root, factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		// AMD support.
		define([], factory);
	} else if (typeof exports === 'object') {
		// NodeJS support.
		module.exports = factory();
	} else {
		// Browser global support.
		root.WorldFactbook = factory();
	}
})(this, function() {
	'use strict';

	var fs = require('fs');
	var defaults = {
		key: false,
		theme: 'default'
	};

	// Constructor //

	var WorldFactbook = function(options) {
		options = options || {};
		console.dir(options);
		this.key = options.key || defaults.key;
		this.theme = options.theme || defaults.theme;
	};

	WorldFactbook.prototype.get = function(key, country) {
		if (!this.key) {
			return fetch('/data/factbook/' + country + '.json', {method: 'GET', mode: 'cors', cache: 'default'}
			).then(function(response) {
				return response.json();
			});
		} else {
			return "error";
		}
	};

	WorldFactbook.prototype.renderHTML = function(key, country, section) {
		let hoganized = require('./' + this.theme + '-templates');
		return this.get(key, country).then(function(currentCountry) {
			if (section) return hoganized.templates(section).render(currentCountry[section]);
			var entireFactbook = hoganized.templates('factbook').render(currentCountry);
			return entireFactbook;
		});
	};

	return WorldFactbook;
});