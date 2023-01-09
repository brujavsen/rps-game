//Juego piedra, papel, tijera
//Se crean todas las variables necesarias para llamar elementos
const piedra = document.querySelector("#rock");
const papel = document.querySelector("#paper");
const tijera = document.querySelector("#scissor");
const resultMachine = document.querySelector("#result-machine");
//Se juega con el DOM, crear parrafo y etiquetas images
const parElement = document.createElement("p");
const imageUser = document.createElement("img");
const imageMachine = document.createElement("img");
//Se anexan al div de result-machine
resultMachine.appendChild(parElement);
resultMachine.appendChild(imageUser);
resultMachine.appendChild(imageMachine);

function classManager() {
    switch (parElement.textContent) {
        case "Ganaste":
            parElement.classList.add("ganador");
            parElement.classList.remove("empate");
            parElement.classList.remove("perdedor");
            break;
        case "Perdiste":
            parElement.classList.add("perdedor");
            parElement.classList.remove("empate");
            parElement.classList.remove("ganador");
            break;
        case "Empate":
            parElement.classList.add("empate");
            parElement.classList.remove("perdedor");
            parElement.classList.remove("ganador");
            break;
        default:
            break;
    }
}

//Funcion según su selección en los botones {piedra = 0, papel = 1, tijera = 2}
function juegoPPT(number) {
    //Número random que se maneja desde 0 a 2, jugada de la máquina
    let machine = Math.floor(Math.random() * 3);
    //Según el número que contenga el botón, se realiza una acción
    if(number == 0) {
        //Muestra imagen según botón
        imageUser.setAttribute("src", "img/piedra.png");
        //Según el número random de la máquina, se muestra la imagen de lo que le toco junto un mensaje
        if(machine == 0) { 
            imageMachine.setAttribute("src", "img/piedra.png");
            parElement.textContent = "Empate";
            classManager();
        }else if(machine == 1) {
            imageMachine.setAttribute("src", "img/papel.png");
            parElement.textContent = "Perdiste";
            classManager();
        }else if(machine == 2) {
            imageMachine.setAttribute("src", "img/tijera.png");
            parElement.textContent = "Ganaste";
            classManager();
        }
    }else if(number == 1) {
        imageUser.setAttribute("src", "img/papel.png");
        if(machine == 0) {
            imageMachine.setAttribute("src", "img/piedra.png");
            parElement.textContent = "Ganaste";
            classManager();
        }else if(machine == 1) {
            imageMachine.setAttribute("src", "img/papel.png");
            parElement.textContent = "Empate";
            classManager();
        }else if(machine == 2) {
            imageMachine.setAttribute("src", "img/tijera.png");
            parElement.textContent = "Perdiste";
            classManager();
        }
    }else if(number == 2) {
        imageUser.setAttribute("src", "img/tijera.png");
        if(machine == 0) {
            imageMachine.setAttribute("src", "img/piedra.png");
            parElement.textContent = "Perdiste";
            classManager();
        }else if(machine == 1) {
            imageMachine.setAttribute("src", "img/papel.png");
            parElement.textContent = "Ganaste";
            classManager();
        }else if(machine == 2) {
            imageMachine.setAttribute("src", "img/tijera.png");
            parElement.textContent = "Empate";
            classManager();
        }
    }
}