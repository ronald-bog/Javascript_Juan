//* juan8619@hotmail.com

// Metodos de los arrays

// push
let arreglo = [1, 2, 3, 5];
console.log(arreglo);
arreglo.push(6);
console.log(arreglo);

// lenght
console.log(arreglo.length);

// pop
const ultimo = arreglo.pop();
console.log(ultimo);
console.log(arreglo);
// arreglo.pop();
// console.log(arreglo);

// shift
let arreglo2 = [6, 7, 8, 9];
let valor = arreglo2.shift();
console.log(valor);

// unshift
arreglo2.unshift(50, 3);
console.log(arreglo2);

// join
let nombres = ['Juan', 'Carlos', 'Sonia'];

let names = nombres.join('-');
console.log(names);

// split
let frase = 'Hola mundo Juan';
let resultado = frase.split(' ');
console.log(frase);
console.log(frase.split(' '));

// splice
let arregloSplice = [1, 2, 3, 4, 5];

// arregloSplice.splice(2);
// console.log(arregloSplice);

// arregloSplice.splice(2,1);
// console.log(arregloSplice);

arregloSplice.splice(2, 0, 8);
console.log(arregloSplice);

// indexOf