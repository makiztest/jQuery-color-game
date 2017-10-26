var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
]

$(".square").each(function(arr) {
    $(this).css("backgroundColor", colors[arr]);
})