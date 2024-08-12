const preguntas= ["¿En que año fallece el cantante Michael Jackson?",
    "¿Quien sacó el albúm llamado Thank U. Next?",
    "¿De que nacionalidad es el cantante Maluma?",
    "¿Quien es la princesa del Pop?",
    "¿Cual es el genero de musica de Romeo Santos?"
]
const opciones =[
    ["2024", "1940", "1800", "2009"],
    ["Lana del Rey", "Billie Eilish", "Ariana Grnade", "Olivia Rodrigo"],
    ["Colombia", "Venezuela", "Perú", "Argentina"],
    ["Britney Spears", "Maddona", "Rihana", "Cardi B"],
    ["Balada", "Regueton", "Bachata", "Reparto chocolatero"]



];

const clave =[
    [0, 0, 0, 5],
    [0, 0, 5, 0],
    [5, 0, 0, 0],
    [5, 0, 0, 0],
    [0, 0, 5, 0]
     
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
