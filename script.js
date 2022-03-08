(function () {
  var btn = document.getElementsByTagName("button");
  var input = document.getElementById("input");

  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", element);
  }
  
  function element() {
    if (this.value == "reset") {
      input.innerHTML = "";
    } else if (this.value == "del") {
      input.innerHTML= input.innerHTML.slice(0, -1);
    }
    else if(this.value == "equity"){
        input.innerHTML = eval(input.innerHTML)}
    else{
      input.innerHTML += this.value;
    }}
  
  
})();