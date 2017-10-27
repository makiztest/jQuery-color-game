var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
]

var squares = $(".square");
var pickedColor = pickColor();
var colorDisplay = $(".colorDisplay");
var messageDisplay = $(".messageDisplay");

colorDisplay.text(pickedColor);

squares.each(function(arr) {
    $(this).css("backgroundColor", colors[arr]);
    var clickedColor = $(this).css("backgroundColor")
    $(this).click(function() {
        if(clickedColor === pickedColor) {
            messageDisplay.text("Correct")
            changeColors(pickedColor);
        } else {
            $(this).css("backgroundColor", "cadetblue")
            messageDisplay.text("Try Again")
        }
    })
})

function changeColors(color) {
    squares.each(function() {
        $(this).css("backgroundColor", color)
    })
}

function pickColor() {
    console.log(Math.floor(Math.random() * colors.length))
}