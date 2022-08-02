/**
 * Utility to remove specific attributes from all
 * child nodes of a given node.
 */

'use strict';

function removeAttributes(el, attrs) {
	var localAttrs = attrs;

	if (localAttrs === true) {
		localAttrs = ['style'];
	}

	if (!localAttrs || !localAttrs.length) {
		return el;
	}

	var els = el.find('*');

	els.each(function (i) {
		localAttrs.forEach(function (attr) {
			els.eq(i).removeAttr(attr);
		});
	});

	return el;
}

module.exports = removeAttributes;
