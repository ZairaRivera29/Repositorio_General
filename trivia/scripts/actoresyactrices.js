const preguntas= ["¿Como se llama el actor que participa en a pelicula Titanic?",
    "¿Que película pertenece a Angelina Jolie?",
    "¿Que edad tiene el actor Tom Holland?",
    "¿Cual de los actores fue quien primero le dio vida a spiderman?",
    "¿Quien protagonizó High School musical?"
    
]
const opciones =[
    ["Leonardo Da Vinci", "Leonardo Bonucci", "Leonardo Dicaprio", "Leonardo Poncio"],
    ["Malefica", "Spiderman", "Jurassic Park", "La Bella y la Bestia"],
    ["40", "28", "30", "20"],
    ["Tom Holland", "Andrew Garfield", "Tobey Maquire", "Chayanne"],
    ["Zac Efron", "Hannah Montana", "Jhonny Deep", "Lucas Grabell"]



];

const claves =[
    [0, 0, 5, 0],
    [5, 0, 0, 0],
    [0, 5, 0, 0],
    [0, 0, 5, 0],
    [5, 0, 0, 0]
     
]
var i = 0;
var puntaje = 0;
var intervalo;

//eventos


document.getElementById('op1').addEventListener("click",function(){
    actualizarPuntaje(1);
})
document.getElementById('op2').addEventListener("click",function(){
    actualizarPuntaje(2);

})
document.getElementById('op3').addEventListener("click",function(){
    actualizarPuntaje(3);

})
document.getElementById('op4').addEventListener("click",function(){
    actualizarPuntaje(4);

})


//Operaciones (funciones)
function mostrarPregunta() {
    iniciarCronometro();
    document.getElementById('pregunta').innerHTML = preguntas[i];
    document.getElementById('op1').innerHTML = opciones[i][0];
    document.getElementById('op2').innerHTML = opciones[i][1];
    document.getElementById('op3').innerHTML = opciones[i][2];
    document.getElementById('op4').innerHTML = opciones[i][3];

}
function iniciarCronometro() {
    const duracion = 10;
    const cronometro = document.getElementById('cronometro');
    cronometro.textContent = "00:" + '10';
    checktiempo(duracion, cronometro);
}
function checktiempo(tiempo, elemento) {
    intervalo = setInterval(() => {
        if (tiempo == 0) {
            actualizarPuntaje();
        } else {
            tiempo = tiempo - 1;
            elemento.textContent = "00:" + tiempo;
        }
    }, 1000);
}
function actualizarPuntaje(valor) {
    clearInterval(intervalo);

    if (valor) {
        valor=valor-1;
        puntaje = parseInt(clave[i][valor]) + puntaje;
    }
    console.log(puntaje);
    console.log(valor);
    i = i + 1;
    if (preguntas.length > i) {
        mostrarPregunta();
    } else {
        localStorage.setItem('resultados', puntaje);
        location.href='resultados.html';
    }
}


mostrarPregunta();
