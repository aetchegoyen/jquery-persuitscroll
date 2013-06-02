/*
 * jQuery Persuit Scroll plug-in 1.0
 *
 * Copyright (c) 2012 Alejandro Etchegoyen 
 *
 * http://www.etchegoyen.net/jquery/jquery-persuitscroll/
 *
 * Depends:
 * - jQuery
 *
 * Dual licensed under the MIT and GPL licences:
 * 	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 *
 */
 
(function($){
    $.fn.persuitScroll = function(options) {
	
        var $this = this;
        var parentPaddingTop = parseInt($this.parent().css('padding-top'));
        var startOffset = $this.parent().offset().top;
		
		//Default settings
        var defaults = {
            startOffset: startOffset, 
            offsetY: parentPaddingTop, 
            duration: 200, 
            lockBottom:true
        }
		
		//Config extended with user options
        var config = $.extend(defautls, options);

		//Sets the element position css property to absolute
        $this.css({position:'absolute'});

		//Checks for lockBottom option and functionality
        if(config.lockBottom){
            var bottomPos = $this.parent().height() - $this.height() + parentPaddingTop;
            if( bottomPos < 0 ) bottomPos = 0;
        }

		//Starts listening to the scroll event
        $(window).scroll(function () {
            
			//Stops the element if is being animated
			$this.stop();

			//Makes the coordinates magic
            var pastStartOffset         = $(document).scrollTop() > config.startOffset;
            var objFartherThanTopPos    = $this.offset().top > startOffset;
            var objBiggerThanWindow     = $this.outerHeight() < $(window).height();

			//Animates the div to the target Y coordinate
            if((pastStartOffset || objFartherThanTopPos) && objBiggerThanWindow ){
                var newpos = ($(document).scrollTop() -startOffset + config.offsetY );
                if (newpos > bottomPos) newpos = bottomPos;
                if ($(document).scrollTop() < config.startOffset) newpos = parentPaddingTop;
                $this.animate({ top: newpos }, config.duration );
            }
        });
     };
 })(jQuery);