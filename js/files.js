//this file gets all the css files
//just upload this file to your servers
window.onload = files();
function files(){
  readTextFile("https://github.com/programmingfish/iceworkframework/js/link.JSON", function(text){
  var data = JSON.parse(text);
  console.log(data);
}
