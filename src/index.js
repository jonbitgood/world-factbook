/*!
 *  WorldFactbook.js for World Factbook in JavaScript.
 *
 *  @version 0.1.0
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
	var hoganized = require('./templates');

	var defaults = {
		key: false
	};

	// Constructor //

	var WorldFactbook = function(options) {
		options = options || {};
		this.key = options.key || defaults.key;
	};

	/**
   * Get the current key.
   *
   * @return {string} The current key.
   */
	WorldFactbook.prototype.getKey = function() {
		return this.key || defaults.key;
	};

	/**
   * Set the current key.
   *
   * @param key {string} The key to set.
   *
   * @return void
   */
	WorldFactbook.prototype.setKey = function(key) {
		this.key = key;
	};

	/**
   * Get a translation message.
   *
   * @param key {string} The key of the message.
   * @param section {string} The replacements to be done in the message.
   * @param key {string} The key to use, if not passed use the default key.
   *
   * @return {string} The translation message, if not found the given key.
   */
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

	WorldFactbook.prototype.renderHTML = function(key, country, section, theme) {
		return this.get(key, country).then(function(currentCountry) {
			if (section) return hoganized.templates()[theme + section].render(currentCountry[section]);
			var entireFactbook = hoganized.templates()['factbook'].render(currentCountry);
			return entireFactbook;
		});
	};

	return WorldFactbook;
});