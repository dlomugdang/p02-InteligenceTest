/*Lewis Lomugdang */
function solutionOne(x,y){
  return (x-y).toString() + (x+y).toString() + (x*y).toString();
}

function validate(){
  var num = document.getElementById("userNum").value;
  var score = 0;
  if(num == solutionOne(24, 7)){
    document.getElementById("userVal").classList.add("has-success");
    document.getElementById("userVal").classList.remove("has-error");
    score++;
  }
  else{
    document.getElementById("userError").innerHTML="The answer must be a number!";
    document.getElementById("userError").classList.remove("hidden-message");
    document.getElementById("userError").classList.add("shown-message");
    document.getElementById("userVal").classList.add("has-error");
    document.getElementById("userVal").classList.remove("has-success");
    score = 0;
  }
  setCookie("question1", Number(score));
}

function solutionTwo(string){
  return sentence.toString();
}

function validate2(){
  var sentence = document.getElementById("userNum").value;
  score = 0;
  if(sentence == "100 cents in a dollar"){
    document.getElementById("userVal").classList.add("has-success");
    document.getElementById("userVal").classList.remove("has-error");
    score++;
  }
  else{
    document.getElementById("userError").innerHTML="The answer must be a sentence!";
    document.getElementById("userError").classList.remove("hidden-message");
    document.getElementById("userError").classList.add("shown-message");
    document.getElementById("userVal").classList.add("has-error");
    document.getElementById("userVal").classList.remove("has-success");
    score = 0;
  }
  setCookie("question2", Number(score));
}

function solutionThree(string){
  return (bin).toString(2) + (bin).toString(2);
}

function validate3(){
  var bin = document.getElementById("userNum").value;
  score = 0;
  if(bin == "01010110 01001101"){
    document.getElementById("userVal").classList.add("has-success");
    document.getElementById("userVal").classList.remove("has-error");
    score++;
  }
  else{
    document.getElementById("userError").innerHTML="The answer must be in binary!";
    document.getElementById("userError").classList.remove("hidden-message");
    document.getElementById("userError").classList.add("shown-message");
    document.getElementById("userVal").classList.add("has-error");
    document.getElementById("userVal").classList.remove("has-success");
    score = 0;

  }
  setCookie("question3", Number(score));
}

var counter = 0;

function resultPage(){
  var resultCount;
  resultCount = Number(getCookie("question1")) + Number(getCookie("question2")) + Number(getCookie("question3"));
  var resultTotal = Number(resultCount)/3;
  var percent = resultTotal*100;

  document.getElementById("ans").innerHTML = Number(percent.toFixed(2)) + "%";
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
