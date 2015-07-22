var textNum = -1;
var animNum = -1;

function squeak() {
    var textOrAnimation = Math.random();
    
    //textOrAnimation = 0.1;
    
    // Clear previous animations 
    if (animNum == 0) {
        //console.log("Removing snowflakes");
        //location.reload();
        $('.flake').remove();
    } else if (animNum == 1) {
        //console.log("Removing font flakes");
        //location.reload();
        //$('.fontFlake').remove();
    } else if (animNum == 2) {
        $('.container-full').css('background-color', '#f8f8ff');
        $('canvas').remove();
        //location.reload();
    }  
    
    if (textOrAnimation > 0.5) {
        // Random Text Quote
        var randomNum = Math.floor(Math.random()*squeaksArray.length);

        if (randomNum != num) {
            num = randomNum;
            $('.squeak').html(squeaksArray[randomNum]);
        } else {
            squeak();
        }
    } else {
        randomAnimation();
    }
}

function randomAnimation() {
    var randomNum = Math.floor(Math.random() * 3);
    
    if (randomNum != animNum) {
        //randomNum = 3;
        
        animNum = randomNum;
        
        switch (randomNum) {
            case 0:
                $.fn.snow({ minSize: 5, maxSize: 50, newOn: 500, flakeColor: '#0099FF' });
                $('.squeak').html("Let it Snow<br> Let it Snow<br> Let it snow!");
                break;
            
            case 1:
                 window.setInterval(function(){
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
            
            // Not working 
            case 3:
                console.log("Animate Background");
                $('.container-full').animate( { backgroundColor: 'violet' }, 500)
                   .animate( { backgroundColor: 'pink' }, 500)
                   .animate( { backgroundColor: 'violet' }, 500)
                   .animate( { backgroundColor: 'pink' }, 500)
                   .animate( { backgroundColor: 'violet' }, 500)
                   .animate( { backgroundColor: 'pink' }, 500)
                   .animate( { backgroundColor: 'violet' }, 500)
                   .animate( { backgroundColor: 'pink' }, 500);
                $('.squeak').html("Flashing background colours but not working :(");
                break;            
            
            default:
                randomAnimation();
                break;
        }
    } else {
        randomAnimation();
    }
}