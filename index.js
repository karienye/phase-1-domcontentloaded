// Your code goes here
/*document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });*/
  
 // console.log ('This is really cool!')
  
  document.addEventListener("DOMContentLoaded", function() {
    updateDom()
  });
  function updateDom () {
  document.getElementById('text') .innerHTML = "This is really cool!" ;
  }
 