// Funciones Declarativas: Son HOISTED, tradicionales

// void sin parametros
function saludar() {
    console.log('Hola Juan');
}
//saludar();

// Retorno y sin parametros
function saludarR() {
    return 'Estoy programando';
}

let saludo = saludar();
console.log(saludo);

console.log('*********************');

let saludo2 = saludarR();
console.log(saludo2);

// void con parametros

function saludarVP(nombre) {
    console.log(`Hola, ${nombre}`);
}

saludarVP('Carlos');

// Retorno con parametros 

function sumar1(num) {
    let resultado = num + 10;
    return resultado;
}

function sumar2(num) {
    return num + 10;
}

let res1 = sumar1(5);
let res2 = sumar2(5);

console.log(res1);
console.log(res2);

// Retorno, varios parametros
function sumarRVP(n1, n2, n3) {
    let resultado1 = n1 + n2 + n3;
    return resultado1;
}

console.log(sumarRVP(10, 20, 30));