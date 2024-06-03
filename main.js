function mostrar_ocultar(parrafoID, botonID) {
    let parrafo = document.querySelector(parrafoID)
    let boton = document.querySelector(botonID)

    if (parrafo.style.display == "none") {
        parrafo.style.display = "block"
        boton.innerHTML = "Ocultar"
    }
    else {
        parrafo.style.display = "none"
        boton.innerHTML = "Ver Sinopsis"
    }

}