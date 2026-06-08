//esto es un comentario
/*esto es un comentario que sigue en otra linea*/

//Asi se declaran las variables 
/*var nombre1;
let nombre2;
const nombre3 = "Lauty";*/

/*let numero1=3;
let numero2=4;
let resultado= 0;

resultado = numero1 + numero2;
console.log("el resultado es " +resultado)
alert("El resultado de la suma es: "+resultado)


let numero3=10;
let numero4=5;
let resultado2= 0;

resultado = numero3 - numero4;
console.log("el resultado es " +resultado)
alert("El resultado de la suma es: "+resultado)

let numero6=10;
let numero7=5;
let resultado3= 0;

resultado = numero6 * numero7;
console.log("el resultado es " +resultado)nm  
alert("El resultado de la suma es: "+resultado)

let numero8=10;
let numero9=5;
let resultado4= 0;

resultado = numero8 / numero9;
console.log("el resultado es " +resultado)
alert("El resultado de la suma es: "+resultado)*/

/*
let nombre = 0;
let apellido = 0;
let edad = 0;
nombre= prompt("ingrese su nombre");
apellido= prompt("ingrese su apellido ");
edad= prompt("ingrese su edad ")
resultado = nombre + apellido + edad;
console.log("tu nombre es " + nombre + " " + apellido + " " + " y tu edad es " + edad )
alert("tu nombre es " + nombre + " " + apellido + " " + " y tu edad es " + edad) */
/*
const currentYear = 2026;
let birthYear = prompt("ingrese su fecha de naimiento");
birthYear= parseInt(birthYear);
let age = 0;
age = currentYear - birthYear;
console.log("su edad es " + age);
alert("su edad es " + age);

const currentYear = 2026;
let birthYear = prompt("ingrese su edad");
birthYear= parseInt(birthYear);
let año = 0;
año = currentYear - birthYear;
console.log("usted nacio en " + año);
alert("usted nacio en " + año);*/


/*
let base = prompt("ingrese la abase del rectangulo");
base =parseInt(base);
let altura = prompt("ingrese la altura del rectangulo");
altura =parseInt(altura);
let resultado = 0;
resultado = base * altura;
console.log(resultado);*/

/*const IVA = 1.21;
let precio 
let precio = parseInt(precio)

let edad = prompt("ingresa tu edad " )
if (edad >= 18){
    alert("puede ingresar a la pagina")
}

if (edad < 18){
    alert("no puedes entrar a la pagina")
}


let edad = prompt("ingresa tu edad " )
if (edad >= 18){
    alert("puede ingresar a la pagina")
}else{
    alert("no puedes entrar a la pagina")
}

let genero = prompt("ingrese F o M")

let edad = parseInt(prompt("ingrese su edad"));
let nombre = prompt("ingrese su nombre");
if (edad );*/

// for (let i=0; i<10; i= i + 1){
//     console.log(i);
// }
//     let nombre = prompt("ingrese su nombre");
//     let numero = parseInt(prompt("ingrese 0 si esta ausente o 1 si esta presente"));
//     if (numero == 1){
//         console.log(nombre + " esta presente")
//     } else {
//         console.log(nombre + " esta ausente")

// }
// let acumulador = 0;
// let contador = 0;

// for (let i = 0; i < 5; i = i + 1) {
//     let nombre = prompt("ingrese su nombre");
//     let nota1 = parseInt(prompt("ingrese la primera nota"));
//     let nota2 = parseInt(prompt("ingrese la segunda nota"));
    
//     let promedio = (nota1 + nota2) / 2;
//     acumulador = acumulador + promedio;
//     contador = contador + 1;
    
//     console.log(nombre + " su promedio es: " + promedio);
//     alert(nombre + " su promedio es: " + promedio);
// }

// let promedioTotal = acumulador / contador;
// console.log("promedio total de todos: " + promedioTotal);
// alert("promedio total de todos: " + promedioTotal);

// let nombre;
// let asistencia;

// do {
//     nombre = prompt("ingrese el nombre del alumno");
//     asistencia = prompt("ingrese 0 si esta ausente o 1 si esta presente, y f para finalizar");
//     if (asistencia == "1"){
//         console.log(nombre + " esta presente")
//     } else if (asistencia== "0"){
//         console.log(nombre + " esta ausente")
//     }
// } while (asistencia != "f");
// let numeroSecreto = 76;
// let numeroUsuario = 0;
// let intentos = 0;

// do {
//     numeroUsuario = parseInt(prompt("Adivina el número secreto (entre 1 y 100):"));
//     intentos = intentos + 1;
    
//     if (numeroUsuario == numeroSecreto) {
//         alert("¡Ganaste! El número era " + numeroSecreto + " lo adivinaste en " + intentos + " intentos");
//         console.log("¡Ganaste en " + intentos + " intentos!");
//     } else if (numeroUsuario < numeroSecreto) {
//         alert("El número es mayor");
//     } else {
//         alert("El número es menor");
//     }
// } while (numeroUsuario != numeroSecreto);
//    function saludar(){
//     nombre = prompt("ingrese su nombre");
//     alert("Hola, Como estas " + nombre + "?" + " Bienvenido a la clase de programacion")
//    }
// contrasenainteresantejl
//    function despedir(){
//     nombre = prompt("ingrese su nombre");
//     alert("Adios " + nombre + "!" + " Nos vemos en la proxima clase")
//    }
// let n1 = 0;
// let n2 = 0;
// const numero = (parametro) => {
//  if (n1==0) {
//     n1 = parametro;
//     } else {
//         n2 = parametro;

// }
// }
// const resultado = () => {
//     console.log(n1 + n2);
//     n1 = 0;
//     n2 = 0; 
// }
// const limpiar = () => {
//     n1 = 0;
//     n2 = 0; 
//     console.log("calculadora limpia")
// }
// const incrementarContador = () => {
//     let contador = parseInt(document.getElementById("contador").textContent);
//     contador++;
//     document.getElementById("contador").textContent = contador;
// }
// const decrementarContador = () => {
//     let contador = parseInt(document.getElementById("contador").textContent);
//     contador--;
//     document.getElementById("contador").textContent = contador;
// }                   
// const resetearContador = () => {
//     document.getElementById("contador").textContent = 0;
// }   
            // let contador = 0;

            // const actualizarContador = () => {
            //     document.getElementById('valorContador').textContent = contador;
            // };

            // const sumar = () => {
            //     contador += 1;
            //     actualizarContador();
            // };

            // const restar = () => {
            //     contador -= 1;
            //     actualizarContador();
            // };
            // function saludar() {
            //     nombre = document.getElementById("inpnombre").value;
            //     document.getElementById("saludo").innerHTML = "Hola, Como estas " + nombre + "?" + " Bienvenido a la clase de programacion";
            // }
            // Generar letra aleatoria
function generarLetra() {
    const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letra = abecedario[Math.floor(Math.random() * abecedario.length)];
    document.getElementById("letra").value = letra;
}

// Función principal
function ingresar() {
    const letra = document.getElementById("letra").value.toUpperCase();

    if (!letra) {
        alert("Primero generá una letra");
        return;
    }

    // Obtener todos los inputs menos letra y puntos
    const inputs = document.querySelectorAll("tbody input:not(#letra):not(#puntos)");

    let total = 0;

    inputs.forEach(input => {
        const palabra = input.value.trim().toUpperCase();

        if (palabra === "") {
            input.style.backgroundColor = "#ffcdd2"; // rojo suave
        } else if (palabra.startsWith(letra)) {
            total += 10;
            input.style.backgroundColor = "#c8e6c9"; // verde
        } else {
            input.style.backgroundColor = "#ffcdd2"; // rojo
        }
    });

    document.getElementById("puntos").value = total;
}

// Resetear juego
function reiniciar() {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.value = "";
        input.style.backgroundColor = "white";
    });
}

// Generar letra al cargar la página
window.onload = generarLetra;
