var textNum = -1;
var animNum = -1;

var timer = null;

function squeak() {
    var textOrAnimation = Math.random();
    
    //textOrAnimation = 0.1;
    
    // Clear previous animations 
    if (animNum == 0) {
        clearInterval(interval);
    } else if (animNum == 1) {
        window.clearInterval(timer);
    } else if (animNum == 2) {
        $('.container-full').css('background-color', '#f8f8ff');
        $('canvas').remove();
    }  
    
    if (textOrAnimation > 0.3) {
        // Random Text Quote
        var randomNum = Math.floor(Math.random()*squeaksArray.length);

        if (randomNum != textNum) {
            textNum = randomNum;
            $('.squeak').html(squeaksArray[randomNum]);
        } else {
            squeak();
        }
    } else {
        randomAnimation();
    }
}

function randomAnimation() {
    var numAnimations = 4;
    var randomNum = Math.floor(Math.random() * numAnimations);
    
    if (randomNum != animNum) {
        //randomNum = 4;
        
        animNum = randomNum;
        
        switch (randomNum) {
            case 0:
                $.fn.snow({ minSize: 5, maxSize: 50, newOn: 500, flakeColor: '#0099FF', durationMillis: 60});
                $('.squeak').html("Let it Snow<br> Let it Snow<br> Let it snow!");
                break;
            
            case 1:
                 timer = window.setInterval(function(){
                    var stageWidth = $(window).width();
                    var stageHeight = $(window).height();
                    var randomEntry = Math.ceil(Math.random()*stageWidth);
                    var preRandomFontSize = Math.ceil(Math.random()*40);
                    var randomFontSize = preRandomFontSize + 10;
                    var flakeName = 'flake-'+randomEntry;
                    var grayScale = Math.ceil(Math.random()*256);
                    var hue = 'rgb('+grayScale+','+grayScale+','+grayScale+ ')';
                
                $('<div />', {
                        text: randomEntry,
                        id: flakeName,
                }).appendTo('body').addClass('fontFlake').css('left', randomEntry).css('font-size', randomFontSize).css('color', hue).animate({
                        "top": "+=" + stageHeight,
                        opacity: 0
                }, 5000, function() {
                        $('#'+flakeName).remove();                      
                }); 
    
                }, 10);
                
                $('.squeak').html('A taste of MATH: Mutual Abuse To Humans :P');
                break;
            
            case 2:
                $('.container-full').css('background-color', '#000044');
                init3dsnow();
                $('.squeak').html('Scroll down and move your mouse to emjoy the snowflakes!');
                break;
            
            case 3:
                $('.squeak').pburst({
                    partoffset: 250,
                    duration: 1000,
                    frequency: 100
                }).pburst('burst_part', 60);
                $('.squeak').html("Star Burst!");
                break;            
            
            case 4:
                $('#rotating').toggleClass('rotated');
                $('.squeak').html("WHEEE!!!");
                break;
            
            default:
                randomAnimation();
                break;
        }
    } else {
        randomAnimation();
    }
}