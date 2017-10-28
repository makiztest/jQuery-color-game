var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = $(".square");
var h1 = $("h1");
var pickedColor = pickColor();
var colorDisplay = $(".colorDisplay");
var messageDisplay = $(".messageDisplay");
var resetBtn = $(".reset");
var modeBtn = $(".mode");

colorDisplay.text(pickedColor);

modeBtn.each(function() {
  $(this).on("click", function() {
    $("button").removeClass("selected");
    $(this).addClass("selected");
    $(this).text() === "Hard" ? (numSquares = 6) : (numSquares = 3);
    reset();
  });
});

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.text(pickedColor);
  changeRandomColors();
  $(".reset").text("New Colors")
  messageDisplay.text("");
  h1.css("backgroundColor", "steelblue");
  squares.each(function(arr) {
    if (colors[arr]) {
      $(this).css("display", "block");
      $(this).css("backgroundColor", colors[arr]);
    } else {
      $(this).css("display", "none");
    }
  });
}

resetBtn.click(function() {
  reset();
});

function changeRandomColors() {
  squares.each(function(arr) {
    $(this).css("backgroundColor", colors[arr]);
  });
}

squares.each(function(arr) {
  $(this).css("backgroundColor", colors[arr]);
  $(this).click(function() {
    var clickedColor = $(this).css("backgroundColor");
    if (clickedColor === pickedColor) {
      messageDisplay.text("Correct");
      changeColors(pickedColor);
      h1.css("backgroundColor", pickedColor);
      resetBtn.text("Play Again");
    } else {
      $(this).css("backgroundColor", "rgb(35, 37, 39)");
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
