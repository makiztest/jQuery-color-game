var colors = generateRandomColors(6);
var squares = $(".square");
var h1 = $("h1");
var pickedColor = pickColor();
var colorDisplay = $(".colorDisplay");
var messageDisplay = $(".messageDisplay");
var resetBtn = $(".reset");
var easyBtn = $(".easyBtn");
var hardBtn = $(".hardBtn");

easyBtn.click(function() {
  $(this).addClass("selected")
  hardBtn.removeClass("selected")
})

hardBtn.click(function() {
  $(this).addClass("selected")
  easyBtn.removeClass("selected")
})


// colorDisplay.text(pickedColor);
resetBtn.click(function() {
  //generate all new colors
  colors = generateRandomColors(6);
  //pixk a new random color from array
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.text(pickedColor);
  //change colors of square
  changeRandomColors();
  $(this).text("New Colors");
  messageDisplay.text("");
  h1.css("backgroundColor", "cadetblue");
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
