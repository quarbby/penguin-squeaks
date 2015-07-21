var num = 0;

function squeak() {
    var randomNum = Math.floor(Math.random()*squeaksArray.length);

    if (randomNum != num) {
        num = randomNum;
        $('.squeak').html(squeaksArray[randomNum]);
    } else {
        squeak();
    }
}