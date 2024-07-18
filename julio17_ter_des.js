// Expresion ternaria

//4 > 2 ? 'Es mayor' : 'es menor';

console.log(1 > 2 ? 'Es mayor' : 'es menor');

let a = 10;
let b = 9;

let resultado = a < b ? 'a es menor que b' : 'b es menor que a';

console.log(resultado);

const n1 = 10;
const n2 = 8;
const op = 1;
const nombre = 'Juan';

const proceso = (n1, n2, op) =>
    op === 1 ? n1 + n2 :
        op === 2 ? n1 - n2 :
            op === 3 ? n1 * n2 :
                op === 4 ? n1 / n2 :
                    'operacion no valida';

console.log(`Felicitaciones ${nombre} el resultado es: ${proceso(n1, n2, op)}`);


// Desestructuracion o desempaquetamiento de un array

let array = [10, 20, 30];

let [nn1, nn2, nn3] = array;

console.log(nn2);