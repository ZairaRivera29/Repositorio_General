//variables 
const preguntas = ["¿Con que frecuencia realizas deporte?<br>Considera como deporte cualquier actividad que acelere tu ritmo cardiaco, como caminar rápido, andar en bicicleta, bailar o, por supuesto, practicar un deporte.",
    "¿Cuantos vasos de agua(200ml) bebes al dia?<br>No consideres la ingesta de otros líquidos, como gaseosas, jugos azucarados o alcohol.",
    "¿Cuantas porciones de frutas y verduras consumes diariamente?",]

const opciones = [
    ["3 ó más veces por semana",
        "Entre 1 y 2 veces a la semana",
        "Al menos 4 veces al mes"],
    ["Al menos 8 vasos al dia",
        "Entre 5 y 8 depende del día",
        "Cuando me acuerdo"],
    ["5 ó más",
        "2 a 4",
        "Al menos 1 vez al día"]
];
const clave = [
    [5, 4, 3],
    [5, 4, 2],
    [5, 4, 3],
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

//Operaciones (funciones)
function mostrarPregunta() {
    iniciarCronometro();
    document.getElementById('pregunta').innerHTML = preguntas[i];
    document.getElementById('op1').innerHTML = opciones[i][0];
    document.getElementById('op2').innerHTML = opciones[i][1];
    document.getElementById('op3').innerHTML = opciones[i][2];
    

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
    console.log(valor);
    if (valor) {
        valor=valor-1;
        puntaje = parseInt(clave[i][valor]) + puntaje;
    }
    console.log(puntaje)
    i = i + 1;
    if (preguntas.length > i) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}
function mostrarResultado() {
    document.getElementById('cronometro').innerHTML = "";
    document.getElementById('titulo').innerHTML = "Respuesta";
    document.getElementById('contenido').innerHTML = `
    <p class = "resultado" >tu puntaje es de ${puntaje}<p/>
    `;
}
mostrarPregunta();
