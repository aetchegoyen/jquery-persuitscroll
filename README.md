# jQuery PersuitScroll Plugin
jQuery plugin used to make an HTML stick to user scrolling.

Example of minimum usage:
$("#myStickyDiv").persuitScroll();

Example of use with advanced options
$("#myStickyDiv").persuitScroll({
	startOffset: 100,	//A fixed vertical offset to the initial position
	offsetY: 50,		//A fixed vertical offset to the target Y coordinate
	duration: 200,		//The animation duration, in milliseconds
	lockBottom:true		//Determinates if the element will be locked to the bottom
});