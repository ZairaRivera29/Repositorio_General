var frase ="esta es la locate, que esta en cocate";
var expreg= /locate/
var index= frase.search(expreg);

var index= frase.search("locate");

document.getElementById("demo").innerHTML=index;