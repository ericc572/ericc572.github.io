$(document).ready(function (){

	//$ means find whats in the ('####') in the html and change it with the function following.
	// use same . for class and # for id which is the same references in css
	$('.button').click(function(){
		window.location.href = 'index.html';
	})

	$('#aboutButton').click(function(){
		window.location.href = 'about.html';
	})

	$('#projectButton').click(function(){
		window.location.href = 'project.html';
	})


	//Taken from http://www.dwuser.com/education/content/creating-a-jquery-image-scroller/
    $(function(){
        var scroller = $('#scroller div.innerScrollArea');
        var scrollerContent = scroller.children('ul');
        scrollerContent.children().clone().appendTo(scrollerContent);
        var curX = 0;
        scrollerContent.children().each(function(){
            var $this = $(this);
            $this.css('left', curX);
            curX += $this.outerWidth(true);
        });
        var fullW = curX / 2;
        var viewportW = scroller.width();

        // Scrolling speed management
        var controller = {curSpeed:0, fullSpeed:2};
        var $controller = $(controller);
        var tweenToNewSpeed = function(newSpeed, duration)
        {
            if (duration === undefined)
                duration = 500;
            $controller.stop(true).animate({curSpeed:newSpeed}, duration);
        };

        // Pause on hover
        scroller.hover(function(){
            tweenToNewSpeed(0);
        }, function(){
            tweenToNewSpeed(controller.fullSpeed);
        });

        // Scrolling management; start the automatical scrolling
        var doScroll = function()
        {
            var curX = scroller.scrollLeft();
            var newX = curX + controller.curSpeed;
            if (newX > fullW*2 - viewportW)
                newX -= fullW;
            scroller.scrollLeft(newX);
        };
        setInterval(doScroll, 14);
        tweenToNewSpeed(controller.fullSpeed);
    });

});