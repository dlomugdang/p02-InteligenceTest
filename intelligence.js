/*Lewis Lomugdang */

function problemOne(){
  var valEnter = document.getElementById("userNum");
  //alert(valEnter.value);
}
function validate(){
  var num = document.getElementById("userNum");
  if(num == "51124"){
    document.getElementById("userNum").classList.add("has-success");
  }
  else{
    document.getElementById("userError").innerHTML="Incorrect!"
    document.getElementById("userError").classList.remove("hidden-message");
    document.getElementById("userError").classList.add("shown-message");
    document.getElementById("userError").classList.add("has-error");
  }
}
