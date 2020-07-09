// button listener 
var button = document.querySelector('button');

button.addEventListener('click', function(e){
var yourName = document.querySelector ("#yourName").value;
var crushName = document.querySelector ("#crushName").value;
if(yourName == ""){
   alert('Please enter your name');
  }else if (yourName.length <=2 ) {
   alert('Min lenght is 3')
  }else if(!isNaN(yourName)){
   alert('Numbers are not allowed');
  }

  else if(crushName == ""){
   alert('Please enter your love name');
  }else if (crushName.length <=2 ) {
   alert('Min lenght is 3')
  }else if(!isNaN(crushName)){
   alert('Numbers are not allowed');
  }
  else{
  	var max=100;
  	var min=50;

  	// var loveScore = (Math.random()*((max-min)+1))+min;
  	// loveScore=Math.floor(loveScore);
var loveScore = Math.random(50, 100);
loveScore = Math.floor(loveScore * 50) + 50 ;


// A place for % result to be printed out 
var resultNumber = document.querySelector("#resultNumber");
// A place for the following explanation to be printed out 
var explanation = document.querySelector("#explanation");
// Hiding form for result 
var hideForResult = document.querySelector('.hideForResult');
// Showing Try Again button
var tryAgain = document.querySelector('#tryAgain');
// Shortcut for result
var yourResultIs = yourName + " & " + crushName + ", your compatibility is " + loveScore + "%.";

    if (loveScore >= 70) {
        explanation.style.visibility = "visible";
        resultNumber.style.visibility = "visible";
        resultNumber.innerHTML = loveScore + "%";
        explanation.innerHTML = yourResultIs + "High chance there 😏";
        hideForResult.style.display = "none";
        tryAgain.style.visibility = "visible";
    }
    else if (loveScore >= 40 && loveScore < 70) {
        explanation.style.visibility = "visible";
        resultNumber.style.visibility = "visible";
        resultNumber.innerHTML = loveScore + "%";
        explanation.innerHTML = yourResultIs + "That's not bad 🤔";
        hideForResult.style.display = "none";
        tryAgain.style.visibility = "visible";
    }
    else {
        explanation.style.visibility = "visible";
        resultNumber.style.visibility = "visible";
        resultNumber.innerHTML = loveScore + "%";
        explanation.innerHTML = yourResultIs + "ugh, as if! 🤧";
        hideForResult.style.display = "none";
        tryAgain.style.visibility = "visible";
    }
  }	
});

