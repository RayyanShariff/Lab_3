$(document).ready(function() {
  // Exercise 1
  $("p").on("click", function() {
    $(this).hide();
  });

  // Exercise 2
  // 1
  $("body").prepend('<div>This is a Welcome message written using JQuery</div>');

  // 2
  $("body").append('<div class="colour">div1 yellow</div>');
  $("body").append('<div class="colour">div2 yellow</div>');
  $(".colour").css('background-color', 'yellow');

  // 3
  $("body").append('<div class="hide">Hidden Message!</div>');
  $("body").append('<button>Hide</button>');
  $("button").click(function() {
    $(".hide").toggle();
  });

  // 5
  $("body").append('<div style="color:white" id="hiddenName">Rayyan</div>');
  $("body").append('<button id="showButton">Show Name</button>');
  $("#showButton").click(function() {
    $("#hiddenName").css("color", "black");
  });

});