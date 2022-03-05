(function () {
  var btn = document.getElementsByTagName("button");
  var input = document.getElementById("input");

  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", element);
  }
  
  function element() {
    if (this.value == "reset") {
      input.value = "";
    } else if (this.value == "del") {
      input.value = input.value.slice(0, -1);
    }
    else if(this.value == "equity"){
        for(var i = 0; i< input.value.length; i++){
    
            if (input.value[i] == "+"){
            newVal = input.value.split("+");
            var x = parseFloat(newVal[0]);
            var y = parseFloat(newVal[1]);
            input.value = x + y;
         }
         else if (input.value[i] == "-"){
            newVal = input.value.split("-");
            var x = parseFloat(newVal[0]);
            var y = parseFloat(newVal[1]);
            input.value = x - y; 
         }
         else if (input.value[i] == "/"){
            newVal = input.value.split("/");
            var x = parseFloat(newVal[0]);
            var y = parseFloat(newVal[1]);
            input.value = x / y;
         }
         else if (input.value[i] == "x"){
            newVal = input.value.split("x");
            var x = parseFloat(newVal[0]);
            var y = parseFloat(newVal[1]);
            input.value = x * y;
         }
        }

    }
    else {
      input.value += this.value;
    }
  }
  
})();