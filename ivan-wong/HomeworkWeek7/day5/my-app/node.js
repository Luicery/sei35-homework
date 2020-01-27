$(document).ready(function(){
  //A normal iterative function
  x = $(document.body)
  while(x.children().length > 0) {
    x = x.children()
    console.log(x);
  }

  //Recursive
  let deeper = function(x) {
    if(x.children().length > 0) {
      x = x.children();
      console.log(x)
      deeper(x)
    } else {
      return
    }
  }
  deeper(x)
})
