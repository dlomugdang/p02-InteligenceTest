/*Lewis Lomugdang */
function solutionOne(x,y){
  return (x-y).toString() + (x+y).toString() + (x*y).toString();
}

function problemOne(){
  var valEnter = document.getElementById("userNum").value;
  alert(valEnter);
}

function validate(){
  var num = document.getElementById("userNum").value;
  //var valEnter = document.getElementById("userNum").value
  if(num == solutionOne(24, 7)){
    //alert(valEnter + " Correct");
    //document.getElementById("userVal").innerHTML="Correct";
    document.getElementById("userVal").classList.add("has-success");
    document.getElementById("userVal").classList.remove("has-error");
  }
  else{
    //document.getElementById("userError").innerHTML="Incorrect!";
    document.getElementById("userError").classList.remove("hidden-message");
    document.getElementById("userError").classList.add("shown-message");
    document.getElementById("userVal").classList.add("has-error");
    document.getElementById("userVal").classList.remove("has-success")
  }
}

function solutionTwo(string){
  return sentence.toString();
}

function problemTwo(){
  var valEnter = document.getElementById("userNum").value;
  alert(valEnter);
}
function validate2(){
  var sentence = document.getElementById("userNum").value;
  if(sentence == "100 cents in a dollar"){
    document.getElementById("userVal").classList.add("has-success");
    document.getElementById("userVal").classList.remove("has-error");
  }
  else{
    document.getElementById("userError").classList.remove("hidden-message");
    document.getElementById("userError").classList.add("shown-message");
    document.getElementById("userVal").classList.add("has-error");
    document.getElementById("userVal").classList.remove("has-success")
  }
}

function solutionThree(string){
  return (bin).toString(2) + (bin).toString(2);
}

function validate3(){
  var bin = document.getElementById("userNum").value;
  if(bin == "01010110 01001101"){
    document.getElementById("userVal").classList.add("has-success");
    document.getElementById("userVal").classList.remove("has-error");
  }
  else{
    document.getElementById("userError").classList.remove("hidden-message");
    document.getElementById("userError").classList.add("shown-message");
    document.getElementById("userVal").classList.add("has-error");
    document.getElementById("userVal").classList.remove("has-success")
  }
}
