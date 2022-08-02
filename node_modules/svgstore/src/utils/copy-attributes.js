/**
 * Utility to copy specific attributes from one node to another.
 */

'use strict';

var ALWAYS_COPY_ATTRS = ['viewBox', 'aria-labelledby', 'role'];

function copyAttributes(a, b, attrs) {
	var attrsToCopy = ALWAYS_COPY_ATTRS.concat(attrs || []);
	var copiedAttrs = Object.create(null);

	attrsToCopy.forEach(function (attr) {
		if (!attr || copiedAttrs[attr]) {
			return;
		}

		copiedAttrs[attr] = true;

		var bAttr = b.attr(attr);

		if (bAttr != null) {
			a.attr(attr, b.attr(attr));
		}
	});

	return a;
}

module.exports = copyAttributes;
