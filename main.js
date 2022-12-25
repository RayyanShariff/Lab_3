//Exercise 1
$(document).ready(function(){ 

  $("p").on("click",function(){ 
  
    $(this).hide() 
  
  }); 
  
}) 
  
   
//Exercise 2
//1  
$(document).ready(function(){ 

  $("body").append('<div>This is a Welcome message witten using JQuery</div>') 

}) 

//2
$(document).ready(function(){ 

  $("body").append('<div class = "colour">div1 yellow</div>') 

}) 

$(document).ready(function(){ 

  $("body").append('<div class = "colour">div2 yellow</div>') 

}) 

$(document).ready(function(){ 

  $(".colour").css('background-color','yellow') 

}) 

//3
$(document).ready(function(){

  $("body").append('<div class = "hide">Hidden Message!</div>')

})

$(document).ready(function(){

  $("body").append('<button>Hide</button>')

})

$(document).ready(function(){ 

  $("button").click(function(){ 

    $(".hide").toggle() 

  }) 

}) 

//5
$(document).ready(function(){ 

  $("body").append('<div style = "color:white" id = "hiddenName">Rayyan</div>') 

}) 


$(document).ready(function(){

  $("body").append('<button id = "showButton">Show Name</button>')

})

$(document).ready(function(){ 

  $("#showButton").click(function(){ 

    $("#hiddenName").css("color", "black");

  }) 

}) 