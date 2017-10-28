var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = $(".square");
var h1 = $("h1");
var pickedColor = pickColor();
var colorDisplay = $(".colorDisplay");
var messageDisplay = $(".messageDisplay");
var resetBtn = $(".reset");
var easyBtn = $(".easyBtn");
var hardBtn = $(".hardBtn");

colorDisplay.text(pickedColor);

easyBtn.click(function() {
  $(this).addClass("selected");
  hardBtn.removeClass("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.text(pickedColor);
  h1.css("backgroundColor", "steelblue");
  squares.each(function(arr) {
    if(colors[arr]) {
      console.log(colors[arr])
      $(this).css("backgroundColor", colors[arr])
    } else {
      $(this).css("display", "none")
    }
  })
});

hardBtn.click(function() {
  $(this).addClass("selected");
  easyBtn.removeClass("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.text(pickedColor);
  h1.css("backgroundColor", "steelblue");
  squares.each(function(arr) {
      console.log(colors[arr])
      $(this).css("backgroundColor", colors[arr])
      $(this).css("display", "block")
  })
});

resetBtn.click(function() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.text(pickedColor);
  changeRandomColors();
  $(this).text("New Colors");
  messageDisplay.text("");
  h1.css("backgroundColor", "steelblue");
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
