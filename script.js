var output = document.getElementById("output");

function inicio() {
  output.innerHTML = "<p>Te encuentras en un jardín misterioso lleno de criaturas extravagantes. ¿Qué quieres hacer?</p>";
  var buttonDiv = document.createElement("div");
  buttonDiv.innerHTML = "<button onclick='caerMadriguera()'>Caer por la madriguera</button>";
  buttonDiv.innerHTML += "<button onclick='explorarJardin()'>Explorar el jardín</button>";
  output.appendChild(buttonDiv);
}

function caerMadriguera() {
  var buttonDiv = document.createElement("div");
  output.innerHTML = "<p>Caes por una larga madriguera y llegas a un lugar extraño y lleno de puertas...</p>";
  buttonDiv.innerHTML = "<button onclick='abrirPuerta()'>Abrir una de las puertas</button>";
  buttonDiv.innerHTML += "<button onclick='seguirCaida()'>Seguir cayendo</button>";
  output.appendChild(buttonDiv);
}

function explorarJardin() {
  output.innerHTML = "<p>Te adentras en el jardín y ves un camino que se bifurca...</p>";
  var buttonDiv = document.createElement("div");
  buttonDiv.innerHTML = "<button onclick='seguirConejo()'>Seguir al conejo blanco</button>";
  buttonDiv.innerHTML += "<button onclick='meriendaLoca()'>Tener una merienda con el sombrerero loco</button>";
  output.appendChild(buttonDiv);
}

function abrirPuerta() {
  output.innerHTML = "<p>Tras abrir la puerta, te encuentras en una sala con bebidas que te hacen crecer y encoger...</p>";
  var buttonDiv = document.createElement("div");
  buttonDiv.innerHTML = "<button onclick='crecer()'>Beber para crecer</button>";
  buttonDiv.innerHTML += "<button onclick='encoger()'>Beber para encoger</button>";
  output.appendChild(buttonDiv);
}

function seguirCaida() {
  output.innerHTML = "<p>Continúas cayendo hasta llegar a un lugar con un jardín de flores parlantes...</p>";
  var buttonDiv = document.createElement("div");
  buttonDiv.innerHTML = "<button onclick='hablarFlores()'>Escuchar lo que dicen las flores</button>";
  buttonDiv.innerHTML += "<button onclick='buscarSalidaFlores()'>Buscar la salida del jardín</button>";
  output.appendChild(buttonDiv);
}

function seguirConejo() {
  output.innerHTML = "<p>Corres tras el conejo blanco y llegas a un laberinto de caminos...</p>";
  var buttonDiv = document.createElement("div");
  buttonDiv.innerHTML = "<button onclick='resolverLaberinto()'>Resolver el laberinto</button>";
  buttonDiv.innerHTML += "<button onclick='caerTrampa()'>Caer en una trampa</button>";
  output.appendChild(buttonDiv);
}

function meriendaLoca() {
  output.innerHTML = "<p>Tienes una merienda con el sombrerero loco y la liebre de marzo...</p>";
  var buttonDiv = document.createElement("div");
  buttonDiv.innerHTML = "<button onclick='escucharHistoria()'>Escuchar una historia extraña</button>";
  buttonDiv.innerHTML += "<button onclick='bailarLocura()'>Bailar una danza loca</button>";
  output.appendChild(buttonDiv);
}

function crecer() {
  output.innerHTML = "<p>Has crecido tanto que no puedes salir por la puerta...</p>";
  output.innerHTML += "<button onclick='buscarSolucion()'>Buscar una solución</button>";
}

function encoger() {
  output.innerHTML = "<p>Te has encogido tanto que casi desapareces...</p>";
  output.innerHTML += "<button onclick='buscarSolucion()'>Buscar una solución</button>";
}

function hablarFlores() {
  output.innerHTML = "<p>Las flores te cuentan acerca de la reina de corazones...</p>";
  var buttonDiv = document.createElement("div");
  buttonDiv.innerHTML = "<button onclick='encontrarReina()'>Encontrar a la reina de corazones</button>";
  buttonDiv.innerHTML += "<button onclick='huirLaberinto()'>Huir del jardín</button>";
  output.appendChild(buttonDiv);
}

function resolverLaberinto() {
  output.innerHTML = "<p>Resuelves el laberinto y encuentras a la reina de corazones...</p>";
  var buttonDiv = document.createElement("div");
  buttonDiv.innerHTML = "<button onclick='jugarCroquet()'>Jugar al croquet con flamencos</button>";
  buttonDiv.innerHTML += "<button onclick='huirReina()'>Intentar huir de la reina</button>";
  output.appendChild(buttonDiv);
}

function buscarSolucion() {
  output.innerHTML = "<p>Encuentras una poción que te devuelve a tu tamaño normal...</p>";
  output.innerHTML += "<button onclick='reiniciar()'>Volver a jugar</button>";
}

function encontrarReina() {
  output.innerHTML = "<p>Te encuentras con la reina de corazones que te desafía a un juego de cartas...</p>";
  var buttonDiv = document.createElement("div");
  buttonDiv.innerHTML = "<button onclick='jugarCartas()'>Jugar al juego de cartas</button>";
  buttonDiv.innerHTML += "<button onclick='desafiarReina()'>Desafiar a la reina</button>";
  output.appendChild(buttonDiv);
}

function jugarCroquet() {
  output.innerHTML = "<p>Juegas al croquet con flamencos y erizos como pelotas...</p>";
  var buttonDiv = document.createElement("div");
  buttonDiv.innerHTML = "<button onclick='fiestaSombrerero()'>Unirte a una fiesta con el sombrerero loco</button>";
  buttonDiv.innerHTML += "<button onclick='escaparJardin()'>Escapar del jardín</button>";
  output.appendChild(buttonDiv);
}

function jugarCartas() {
  output.innerHTML = "<p>Juegas al juego de cartas y ganas...</p>";
  output.innerHTML += "<button onclick='finalFelicidad()'>Ser feliz en tu mundo</button>";
}

function desafiarReina() {
  output.innerHTML = "<p>Desafías a la reina de corazones y logras ganar...</p>";
  output.innerHTML += "<button onclick='finalFelicidad()'>Ser feliz en tu mundo</button>";
}

function fiestaSombrerero() {
  output.innerHTML = "<p>Te unes a una fiesta con el sombrerero loco y celebras una tarde llena de locura...</p>";
  output.innerHTML += "<button onclick='finalFelicidad()'>Ser feliz en tu mundo</button>";
}

function finalFelicidad() {
  output.innerHTML = "<p>¡Felicidades! Has encontrado la felicidad y regresas a tu mundo.</p>";
  output.innerHTML += "<button onclick='reiniciar()'>Volver a jugar</button>";
}

function escaparJardin() {
  output.innerHTML = "<p>Escapas del jardín y regresas a casa, recordando siempre tus aventuras en el país de las maravillas...</p>";
  output.innerHTML += "<button onclick='reiniciar()'>Volver a jugar</button>";
}

function huirLaberinto() {
  output.innerHTML = "<p>Huyes del jardín y te encuentras en el camino de vuelta a casa...</p>";
  output.innerHTML += "<button onclick='reiniciar()'>Volver a jugar</button>";
}

function huirReina() {
  output.innerHTML = "<p>Intentas huir de la reina, pero ella te persigue...</p>";
  output.innerHTML += "<button onclick='buscarSolucion()'>Buscar una solución</button>";
}

function bailarLocura() {
  output.innerHTML = "<p>Bailas una danza loca con el sombrerero y la liebre de marzo...</p>";
  output.innerHTML += "<button onclick='finalFelicidad()'>Ser feliz en tu mundo</button>";
}

function buscarSalidaFlores() {
  output.innerHTML = "<p>Buscas la salida del jardín y encuentras una puerta escondida...</p>";
  output.innerHTML += "<button onclick='abrirPuerta()'>Abrir la puerta escondida</button>";
}

function caerTrampa() {
  output.innerHTML = "<p>Caes en una trampa del laberinto y quedas atrapado...</p>";
  output.innerHTML += "<button onclick='buscarSolucion()'>Buscar una solución</button>";
}

function reiniciar() {
  output.innerHTML = "<p>¡Bienvenido de nuevo al país de las maravillas!</p>";
  var buttonDiv = document.createElement("div");
  buttonDiv.innerHTML = "<button onclick='inicio()'>Comenzar otra aventura</button>";
  output.appendChild(buttonDiv);
}
