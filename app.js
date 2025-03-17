// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    if (amigos.includes(nombre)) {
      alert("Este amigo ya está en la lista.");
      return;
    }
    amigos.push(nombre);
    document.getElementById("amigo").value = "";
  }

  mostrarAmigos();
}

console.log(amigos);

function listaAmigos(amigos) {
  // Obtener la referencia al elemento UL o OL donde se mostrarán los amigos
  let lista = document.getElementById("listaAmigos");

  // Vaciar el contenido de la lista antes de agregar nuevos elementos
  lista.innerHTML = "";

  // Recorrer el array amigos y agregar cada nombre como un ítem de lista
  amigos.forEach((amigo) => {
    let li = document.createElement("li"); // Crear un elemento <li>
    li.textContent = amigo; // Asignar el texto
    lista.appendChild(li); // Agregarlo a la lista
  });
}

function mostrarAmigos() {
  listaAmigos(amigos);
}

function sortearAmigo() {
  // Validar que el array no esté vacío ni sea nulo
  if (!amigos || amigos.length === 0) {
    console.warn("La lista de amigos está vacía.");
    document.getElementById("resultado").textContent =
      "No hay amigos para sortear.";
    return;
  }

  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  console.log(amigoSorteado);
  document.getElementById("resultado").textContent =
    "El amigo Sorteado es: " + amigoSorteado;
}
