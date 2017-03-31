/*Lewis Lomugdang */
function solutionOne(x,y){
  return (x-y).toString() + (x+y).toString() + (x*y).toString();
}

function validate(){
  var num = document.getElementById("userNum").value;
  if(num == solutionOne(24, 7)){
    document.getElementById("userVal").classList.add("has-success");
    document.getElementById("userVal").classList.remove("has-error");
  }
  else{
    document.getElementById("userError").innerHTML="The answer must be a number!";
    document.getElementById("userError").classList.remove("hidden-message");
    document.getElementById("userError").classList.add("shown-message");
    document.getElementById("userVal").classList.add("has-error");
    document.getElementById("userVal").classList.remove("has-success")
  }
}

function solutionTwo(string){
  return sentence.toString();
}

function validate2(){
  var sentence = document.getElementById("userNum").value;
  if(sentence == "100 cents in a dollar"){
    document.getElementById("userVal").classList.add("has-success");
    document.getElementById("userVal").classList.remove("has-error");
  }
  else{
    document.getElementById("userError").innerHTML="The answer must be a sentence!";
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
    document.getElementById("userError").innerHTML="The answer must be in binary!";
    document.getElementById("userError").classList.remove("hidden-message");
    document.getElementById("userError").classList.add("shown-message");
    document.getElementById("userVal").classList.add("has-error");
    document.getElementById("userVal").classList.remove("has-success")

  }
  window.location.href = "result.html";
}

var counter = 0;

function addCount(){
  var newCount;
  newCount = document.getElementById("userNum").value;
  if(isNaN(newCount)){
    alert("Enter answer");
  }
  else{
    newCount = Number(newCount);
    counter += newCount;

    setCookie("res", counter, 0);
  }
}

function resultPage(){
  var resultCount;
  resultCount = getCookie("res");
  resultCount = Number(resultCount);

  document.getElementById("ans").innerHTML = resultCount;
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
