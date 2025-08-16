function hideAllBoxes() {
    document.getElementById("questionBox").style.display="none";
  document.getElementById("yesBox").style.display="none";
   document.getElementById("noBox").style.display="none";
}
function answerYes() {
    hideAllBoxes();
   document.getElementById("yesBox").style.display="block";  
}
function answerNo() {
    hideAllBoxes();
 document.getElementById("noBox").style.display="block";
}
function goBack() {
    hideAllBoxes();
     document.getElementById("questionBox").style.display="block";
}