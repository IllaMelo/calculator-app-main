(function () {
  var btn = document.getElementsByTagName("button");
  var input = document.getElementById("input");
  var ran = document.getElementById("range");


  ran.addEventListener("click", colorTheme);

  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", element);
  }

  function colorTheme(){
  
      if (ran.value == "2"){
        document.documentElement.style.setProperty('--body-background', 'hsl(0, 0%, 90%)');
        document.documentElement.style.setProperty('--input-range-ball', 'hsl(25, 98%, 40%)');
        document.documentElement.style.setProperty('--display-container', 'black');
        document.documentElement.style.setProperty('--input-range-background', 'hsl(0, 5%, 81%)');
        document.documentElement.style.setProperty('--input', 'white');
        document.documentElement.style.setProperty('--input-html-color', 'black');
        document.documentElement.style.setProperty('--grid-container', 'hsl(0, 5%, 81%)');
        document.documentElement.style.setProperty('--button-color', 'black');
        document.documentElement.style.setProperty('--button-shadow', 'hsl(35,11%,61%)');
        document.documentElement.style.setProperty('--delete-reset-background', 'hsl(185,42%,37%)');
        document.documentElement.style.setProperty('--delete-reset-color', 'white');
        document.documentElement.style.setProperty('--equity-background', 'hsl(25,98%,40%)');
        document.documentElement.style.setProperty('--equity-color', 'white');
        document.documentElement.style.setProperty('--button-background', 'white');

      }
      
      else if(ran.value =="3") {
  
        document.documentElement.style.setProperty('--body-background', 'hsl(268, 75%, 9%)');
        document.documentElement.style.setProperty('--input-range-ball', 'hsl(176, 100%, 44%)');
        document.documentElement.style.setProperty('--display-container', 'hsl(52, 100%, 62%)');
        document.documentElement.style.setProperty('--input-range-background', ' hsl(268, 71%, 12%)');
        document.documentElement.style.setProperty('--input', 'hsl(268, 71%, 12%)');
        document.documentElement.style.setProperty('--input-html-color', 'hsl(52, 100%, 62%)');
        document.documentElement.style.setProperty('--grid-container', 'hsl(268, 71%, 12%)');
        document.documentElement.style.setProperty('--button-color', 'hsl(52, 100%, 62%)');
        document.documentElement.style.setProperty('--button-shadow', 'hsl(285, 91%, 52%)');
        document.documentElement.style.setProperty('--delete-reset-background', 'hsl(290, 70%, 36%)');
        document.documentElement.style.setProperty('--delete-reset-color', 'white');
        document.documentElement.style.setProperty('--equity-background', 'hsl(176, 100%, 44%)');
        document.documentElement.style.setProperty('--equity-color', 'hsl(268, 71%, 12%)');
        document.documentElement.style.setProperty('--button-background', ' hsl(268, 47%, 21%)');
      }
      else if (ran.value == "1"){
        document.documentElement.style.setProperty('--body-background', 'hsl(222, 26%, 31%)');
        document.documentElement.style.setProperty('--input-range-ball', 'hsl(6, 63%, 50%)');
        document.documentElement.style.setProperty('--display-container', 'white');
        document.documentElement.style.setProperty('--input-range-background', 'hsl(223, 31%, 20%)');
        document.documentElement.style.setProperty('--input', 'hsl(224, 36%, 15%)');
        document.documentElement.style.setProperty('--input-html-color', 'white');
        document.documentElement.style.setProperty('--grid-container', 'hsl(223, 31%, 20%)');
        document.documentElement.style.setProperty('--button-color', 'hsl(224, 28%, 35%)');
        document.documentElement.style.setProperty('--button-shadow', 'hsl(221, 14%, 31%)');
        document.documentElement.style.setProperty('--delete-reset-background', 'hsl(222, 26%, 31%)');
        document.documentElement.style.setProperty('--delete-reset-color', 'white');
        document.documentElement.style.setProperty('--equity-background', 'hsl(6, 63%, 50%)');
        document.documentElement.style.setProperty('--equity-color', 'white');
        document.documentElement.style.setProperty('--button-background', ' white');

      }
  
    
  }
  
  function element() {
    if (this.value == "reset") {
      input.innerHTML = "";
    } else if (this.value == "del") {
      input.innerHTML= input.innerHTML.slice(0, -1);
    }
    else if(this.value == "equity"){
        input.innerHTML = eval(input.innerHTML);}
    else{
      input.innerHTML += this.value;
    }}
  
  
})();

