//Variables
var num1 = 4;
var num2 = 2;
var texto1 = '4';
var num3 = 8;
var nombre = "Ana"
//Salidas
console.log(num2>num1);
console.log(num1==texto1);
console.log(num1===texto1);
//Operadores Logicos
//El num1 es mayor al num 2 o num3 es menor a num1
console.log(num1>num2 || num3<num1);

//El num1 es mayor a num2 y num2 es mayor a num3
console.log(num1<num2 && num2<num3);
//Condicional
//si num1 es mayor a num2 "Maria gana el juego"
//si num3 es mayor a num1 "Mario gana el juego"
//caso contrario "Juan gana el juego"

if(num1>num2){
    console.log("Maria gana el juego")

}else if(num3>num2){
    console.log("Mario gana el juego")


}else {
    console.log("Juan gana el juego")
}   
//si la primera letra del nombre es "A" entonces colocar tu nombre inicia con "A"
//si la primera letra del nombre es "B" enmtonces colocar tu nombre inicia con "B"
//Caso contrario colocar "no se como inicia tu nombre"
if(nombre[0]== "A"){
  console.log ("tu nombre inicia con A")
}else if(nombre[0] == "B"){

}
else{
    console.log("No se como inicia tu nombre")
    
}

