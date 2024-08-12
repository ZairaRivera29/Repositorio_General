const preguntas= ["¿Cual es el nombre del personaje de los increibles el cual tiene el super poder de hielo?",
    "¿Cuantas películas tiene la saga de Toys Story?",
    "¿Como se llamaba el mandril chamán que bautiza a los nuevos leones?",
    "En Intensamente 2. ¿Cómo se llamaba el personaje de color naranja?",
    "¿En los increibles cual es el super poder de la hija de Mr.Increible y Elasti-Girl?"
]
const opciones =[
    ["Elasti-Girl", "Frozono", "Sindrome", "Dash"],
    ["3 películas", "5 películas", "4 películas", "2 películas"],
    ["Mufasa", "Scar", "Zazú", "Rafiki"],
    ["Ansiedad", "Aburrimiento", "Envidia", "Alegría"],
    ["Velocidad", "Teletransportación", "Super fuerza", "Invisibilidad"]



];

const claves =[
    [0, 5, 0, 0],
    [0, 0, 5, 0],
    [0, 0, 0, 5],
    [5, 0, 0, 0],
    [0, 0, 0, 5]
     
];
var i = 0;
var puntaje = 0;
var intervalo;
//Eventos


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
        puntaje = parseInt(claves[i][valor]) + puntaje;
    }
    console.log(puntaje);
    console.log(valor);
    i = i + 1;
    if (preguntas.length > i) {
        mostrarPregunta();
    } else {
        localStorage.setItem('resultados', puntaje);
        location.href= 'resultados.html';
    }
}

mostrarPregunta();
