let index = 0; 
const imagenes = [
    "imagen1.jpg", 
    "imagen2.jpg",
    "imagen3.jpg"
];

function mostrarImagen() {
    const imagenElements = document.querySelectorAll(".carrusel-imagen");
    imagenElements.forEach((img, i) => {
        img.classList.remove("active");
        if (i === index) {
            img.classList.add("active");
        }
    });
}

function cambiarImagen(n) {
    index += n;
    if (index < 0) {
        index = imagenes.length - 1; 
    } else if (index >= imagenes.length) {
        index = 0; 
    }
    mostrarImagen();
}

mostrarImagen();

function agregarOpinion() {
    const input = document.getElementById("opiniones-input");
    const opinionTexto = input.value.trim();
    
    if (opinionTexto !== "") {
        const opinionesLista = document.getElementById("opiniones-lista");
        
        const nuevaOpinion = document.createElement("div");
        nuevaOpinion.textContent = opinionTexto;
        opinionesLista.appendChild(nuevaOpinion);
        
        input.value = "";
    } else {
        alert("Por favor, escribe una opinión.");
    }
}
