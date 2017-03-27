/*Lewis Lomugdang */
function solutionOne(x,y){
  return (x-y).toString() + (x+y).toString() + (x*y).toString();
}

function solutionTwo(x,y){
  return (x-y).toString() + (x+y).toString() + (x*y).toString();
}

function problemOne(){
  var valEnter = document.getElementById("userNum").value;
  alert(valEnter);
}

function problemTwo(){
  var valEnter = document.getElementById("userNum").value;
  alert(valEnter);
}

function validate(){
  var num = document.getElementById("userNum").value;
  //var valEnter = document.getElementById("userNum").value
  if(num == solutionOne(8, 3)){
    //alert(valEnter + " Correct");
    //document.getElementById("userVal").innerHTML="Correct";
    document.getElementById("userVal").classList.add("has-success");
    document.getElementById("userVal").classList.remove("has-error");
  }
  /*else if(num == solutionOne(10,6)){
    document.getElementById("userVal").classList.add("has-success");
    document.getElementById("userVal").classList.remove("has-error");
  }*/
  else{
    document.getElementById("userError").innerHTML="Incorrect!";
    document.getElementById("userError").classList.remove("hidden-message");
    document.getElementById("userError").classList.add("shown-message");
    document.getElementById("userVal").classList.add("has-error");
    document.getElementById("userVal").classList.remove("has-success")
  }
}

function validate2(){
  var num = document.getElementById("userNum").value;
  if(num == solutionTwo(10,6)){
    document.getElementById("userVal").classList.add("has-success");
    document.getElementById("userVal").classList.remove("has-error");
  }
  else{
    document.getElementById("userError").innerHTML="Incorrect!";
    document.getElementById("userError").classList.remove("hidden-message");
    document.getElementById("userError").classList.add("shown-message");
    document.getElementById("userVal").classList.add("has-error");
    document.getElementById("userVal").classList.remove("has-success")
  }
}
