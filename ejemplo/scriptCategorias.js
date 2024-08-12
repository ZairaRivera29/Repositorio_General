function escribirNombre(){
    document.getElementById("saludo").innerHTML += localStorage.getItem("name");
}

escribirNombre()