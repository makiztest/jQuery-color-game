var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
]

var squares = $(".square");
var pickedColor = colors[3];
var colorDisplay = $(".colorDisplay");
var messageDisplay = $(".messageDisplay");

colorDisplay.text(pickedColor);

squares.each(function(arr) {
    $(this).css("backgroundColor", colors[arr]);
    var clickedColor = $(this).css("backgroundColor")
    $(this).click(function() {
        if(clickedColor === pickedColor) {
            console.log("colorpicked")
            messageDisplay.text("Correct")
        } else {
            $(this).css("backgroundColor", "cadetblue")
            messageDisplay.text("Try Again")
        }
    })
})