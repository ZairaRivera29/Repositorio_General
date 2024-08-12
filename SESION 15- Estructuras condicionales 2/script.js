//Variables
var clima = 'nublado';
var fruta = 'manzana';
var diasemana = 'martes';

//Estructura Switch Case
switch(clima){
    case 'lluvioso':
        console.log("Recuerda llevar tu paragua");
        break;
    case 'soleado':
        console.log("Viste ropa ligera"); 
        break;
    case 'nublado':
        console.log("Sal a la calle");
        break;
    default:
        console.log("Tipo de clima desconocido");
        break; 



}

//Si la fruta es manzana el precio es de S/.5
//Si la fruta  es platano el precio es de S/.2
//Si la fruta es mango el precio es de S/.4
//Si es cualquier otra fruta no se tiene esa fruta
//Estructura Switch Case
switch  (fruta){
    case 'manzana':
        console.log("El precio es de s/.5");
        break;
    case 'platano':
        console.log("El precio es de s/2");
        break;
    case 'mango':
        console.log("El precio es de s/4");
        break;
    default:
        console.log("Tipo de fruta desconocida");
        break;   
         

}
switch (diasemana){
    case 'lunes':
        console.log("Hoy es lunes");
        break;
    case 'martes' :
        console.log("Hoy es martes");
        break;
    case 'miercoles' :
        console.log("Hoy es miercoles");
    case 'jueves'  :
        console.log("Hoy es jueves");
        break;
    case 'viernes':
        console.log("Hoy es viernes");
        break;
    case 'sabado':
        console.log("Hoy es sabado");
        break;
    case 'domingo':
        console.log("Hoy es domingo");
        break;
    default:
        console.log ("no existe ese dia");
        break;
        
        

        
    
}