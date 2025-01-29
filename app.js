// Vamos se seleccionar elementos del DOM
const nombreInput = document.querySelector('#amigo');
const agregarBtn = document.querySelector('.button-add');
const sortearBtn = document.querySelector('.button-draw');
const listaAmigos = document.querySelector('#listaAmigos');
const resultadoSorteo = document.querySelector('#resultado');

// Array para guardar los amigos
const amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // Obtenemos el valor del input
    const nombre = nombreInput.value;
    // Validamos si el nombre es vacío
    if (!nombre) {
        alert('Debes ingresar un nombre');
        return;
    }
    // Agregamos el nombre al array  y Limpiamos el input
    amigos.push(nombre);
    nombreInput.value = '';

    // Crear y agregar elemento a la lista
    const elementoLista = document.createElement('li');
    elementoLista.textContent = nombre;
    listaAmigos.appendChild(elementoLista);
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validamos si hay amigos en la lista
    if (!amigos.length) {
        alert('No hay amigos, agrega amigos primero!');
        return;
    }
    // Obtenemos un índice aleatorio 
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtenemos el amigo secreto
    const amigoSecreto = amigos[indiceAleatorio];

    // Limpiamos el resultado
    resultadoSorteo.textContent = '';
    // Crear y agregar el resultado
    const elementoResultado = document.createElement('li');
    elementoResultado.textContent = `El amigo sorteado es: ${amigoSecreto}`;
    resultadoSorteo.appendChild(elementoResultado);
}