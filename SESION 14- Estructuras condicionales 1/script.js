var color = "verde" ;
var tamaño = "mediano";
var precio = 1000;
var estación = "verano"
var nota = 16;


//Si el color es verde y el precio es menor igual a 1000
//entonce lo compro, caso contrario me compro otra cosa
if(color == "verde" && precio <= 1000){
    console.log("lo compro");
}else{
    console.log("compro otra cosa");
}  

//Si el tamaño es mediano o el color es verde lo compro,
//caso contrario me voy de viaje.
if(tamaño == "mediano" || color ==  "verde" ){
    console.log("lo compro");
}else{
    console.log ("me voy de viaje");
}

//Si la estación es invierno o la estación es otoño "lo compro"
//caso contrario ahorro el dinero.
if(estación == "invierno" || estación == "otoño"){
    console.log("lo compro");
}else{
    console.log("ahorro el dinero");
}  

//Si el tamaño es mediano o el precio es menor o igual a 1000 
//O el color es rojo, entonces lo compro
//caso contrario ahorro en el banco
if(tamaño == "mediano" || precio >= 1000 || color== "rojo"){
    console.log("lo compro");
}else{
    console.log("ahorro en el  banco");
}   

//Si al nota es mayor o igual a 10 y menor igual a 15 entonces tendrá una "C"
//Si al nota es mayor a 15 y menor a 18, entonces tendra una "B"
//Caso contrario tenga una "A"
if(nota >= 10 && nota <15){
   console.log("C");
}else if(nota>15 && nota<18){
    console.log("B"); 
}else{
    console.log("A");
}       