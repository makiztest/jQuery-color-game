var colors = generateRandomColors(6);
var squares = $(".square");
var h1 = $("h1");
var pickedColor = pickColor();
var colorDisplay = $(".colorDisplay");
var messageDisplay = $(".messageDisplay");

colorDisplay.text(pickedColor);

squares.each(function(arr) {
  $(this).css("backgroundColor", colors[arr]);
  $(this).click(function() {
    var clickedColor = $(this).css("backgroundColor");
    if (clickedColor === pickedColor) {
      messageDisplay.text("Correct");
      changeColors(pickedColor);
      h1.css("backgroundColor", pickedColor)
    } else {
      $(this).css("backgroundColor", "cadetblue");
      messageDisplay.text("Try Again");
    }
  });
});

function changeColors(color) {
  squares.each(function() {
    $(this).css("backgroundColor", color);
  });
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  $.each(new Array(num), function() {
    arr.push(randomColor());
  });
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
