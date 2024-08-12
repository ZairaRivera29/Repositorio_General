/*
const frutas = ["manzana", "pera", "platano", "ciruela"];

//document.getElementById("frutas").innerHTML= frutas;
var texto= "";

for(let i=0;i<frutas.length;i++){

    texto += frutas[i] + "<br>";
}
document.getElementById("frutas").innerHTML= texto;
*/
const numeros = [7, 9, 15, 8, 6, 2, 5, 4]

var texto = "";
for (let i=0; i<numeros.length; i++){
    if(numeros[i]%2!=0){
        
        
    
    texto += numeros[i] + "<br>";
    }
}
document.getElementById("frutas").innerHTML = texto;