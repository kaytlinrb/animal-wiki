$(function() {
var animal= prompt("Type in Dragon, Unicorn, or Centaur to go on a Learning Adventure!!!").toUpperCase();

  if (animal==="DRAGON"){
    $(".dragon").show();
  }
  else if (animal==="UNICORN"){
    $(".unicorn").show();
  }
  else if (animal==="CENTAUR"){
    $(".centaur").show();
  }
  else   {
    $(".nothing").show();
  }




});
