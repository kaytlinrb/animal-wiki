$(function() {

  $("#clickable").click(function(){
    var animal = prompt("Type in Dragon, Unicorn, or Centaur to go on a Learning Adventure!!!").toUpperCase();


  // var animal = prompt("Type in Dragon, Unicorn, or Centaur to go on a Learning Adventure!!!").toUpperCase();


  if (animal==="DRAGON"){
    $(".unicorn, .centaur, .nothing").hide();
    $(".dragon").show();
  }
  else if (animal==="UNICORN"){
    $(".dragon, .centaur, .nothing").hide();
    $(".unicorn").show();
  }
  else if (animal==="CENTAUR"){
    $(".unicorn, .dragon, .nothing").hide();
    $(".centaur").show();
  }
  else   {
    $(".unicorn, .dragon, .centaur").hide();
    $(".nothing").show();
  }


});

});
