'use strict';

/**
 * Scroller module
 * @class
 * @author Thomas Van Kerckvoorde <thomasvk@protonmail.com>
 */

export default class ScrollClass{
	/**
	* @constructor
	*/
	constructor( options ){

		// set defaults and merge with give options
		let { _ticking = false,
			elements = [],
			frequency = 1000 } = options;

		// add scroll event
		window.addEventListener('scroll', () => {
			if(!_ticking){ _ticking = true;
				setTimeout(() => {
					this.checkElements( elements ); _ticking = false;
				}, frequency);
			}
		});

		// initial check
		this.checkElements( elements );
	}

	/*
		loop our objects and toggle animations
	 */
	checkElements( elementsToAnim ) {
		elementsToAnim.forEach( (elementObj ) => {
			if (this.isInViewport( elementObj )) {
				if(elementObj.enabled) {
					elementObj.element.classList.add(...elementObj.classesToToggle);
					(!elementObj.once) ? elementObj.enabled = true : elementObj.enabled = false; }
			} else {
				elementObj.element.classList.remove(...elementObj.classesToToggle); }
		});
	}

	/*
		If element is in viewport helper
	 */
	isInViewport(elementObj) {
		const element = elementObj.element;
		const bounding = element.getBoundingClientRect();

		// return if in viewport or not.
		return (
			bounding.top >= 0 && bounding.left >= 0 &&
			bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
			bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
		);
	}

}
