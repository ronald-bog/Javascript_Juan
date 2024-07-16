// Funciones Expresivas

// function

const saludo = function () {
    return 'Hola soy expresiva';
};

console.log(saludo());

const suma = function () {
    return 5 + 6;
};

console.log(suma());

const resta = function (num) {
    return num - 10;
};

console.log(resta(19));

// Funciones Flecha (Arrows Functions)

const flecha = () => {
    console.log('Soy una flecha....');
};

const flecha1 = () => console.log('Soy una flecha....');
;

flecha();

const flecha3 = () => {
    return 'Soy una flecha.... con retorno';
};

const flecha4 = () => 'Soy una flecha.... con retorno';

console.log(flecha4());

const flechaParam = (num1) => {
    return num1 + num1;
};

const flechaParam2 = num1 => num1 + num1;

const flecha5 = (n1, n2) => console.log(n1 + n2);

flecha5(21, 31);

