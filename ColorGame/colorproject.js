//alert("adfadfs");




/* Array of color*/
// var color = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ];

var color = generateColorArray(6);

/* Variables */
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("color_display");
var pickedColor = pickColor();

var rightDisplay = document.querySelector("#rightScore");
var rightScore = 0;

var wrongDisplay = document.querySelector("#wrongScore");
var wrongScore = 0;

var reset_button = document.querySelector("#reset_button");

var gradeDisplay = document.getElementById("grade");
var gradeScore = 0;

var keyPress = 0;



/*Message Board Variables*/

var message = document.getElementById("message_")
var message_board = document.getElementById("message_");;
var gameTitle = document.getElementById("game_title")
/*RESET BUTTON*/
reset_button.addEventListener('click', function () {
    swal({
  title: "Reset to beginning??",
  text: "Ae you sure?!?!?!?!?!?",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "yep...",
  closeOnConfirm: false
},
function(){
  swal("Reset! ", "score reset", "success");
});
    rightScore = 0;
    wrongScore = 0;
    gradeScore = 0;
    rightDisplay.textContent = rightScore;
    wrongDisplay.textContent = wrongScore;
    gradeDisplay.textContent = gradeScore;

});

/*Initializing Game Pieces*/
for (var i = 0; i < square.length; ++i) {

    // Add Colors
    square[i].style.backgroundColor = color[i];

    // Event Listener

    square[i].addEventListener("click", function () {
        //alert("adfafasoranges");
        keyPress++;

        // Compare Answer to User
        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            //alert("Correct");
            sweetAlert("Correct!","", "success");
            rightScore++;
            rightDisplay.textContent = rightScore;
            changeColor(clickedColor);
            message.textContent = "Correct!";
            game_title.style.backgroundColor = pickedColor;
            message_board.style.backgroundColor = pickedColor;

        } else {

            sweetAlert("Wrong!","" ,"error");
            this.style.backgroundColor = "#FFFFFF";
            this.style.borderStyle = "none";
            message.textContent = "Try Again.";
            wrongScore++;
            wrongDisplay.textContent = wrongScore;

        }

        gradeScore = rightScore / keyPress;
        gradeScore = gradeScore * 100.0;
        gradeDisplay.textContent = Number(gradeScore.toPrecision(3));

        if (keyPress > 5 && gradeScore >= 100) {
            alert("You are the Winner! Game Over");
        }
    });
}


/*Grade Score*/


colorDisplay.textContent = pickedColor;



/** ==========================================
 * External Functions
 * 
 * 
 */


function changeColor(colors) {
    for (var index = 0; index < color.length; index++) {
        square[index].style.backgroundColor = colors;

    }
}

function pickColor() {
    var randomNumber = Math.floor(Math.random() * color.length);
    return color[randomNumber];
}

function generateColorArray(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        // get random color
        arr.push(randomColor())

    }

    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    // rgb(r, g, b)
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}