//we have to target the textarea so id of text area is
function run(){
    let htmlcode=document.getElementById("html-code");
    let csscode=document.getElementById("css-code");
    let jscode=document.getElementById("js-code");
    let output=document.getElementById("output");
//write on html part
    output.contentDocument.body.innerHTML=htmlcode.value +"<style>" +csscode.value+"</style>"
   //js evaluation
   output.contentWindow.eval(jscode.value);
}
