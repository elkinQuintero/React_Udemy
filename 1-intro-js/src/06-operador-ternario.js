const average =6.0;
let status2 = '';

// status2 = (average >= 5.5) ? 'Aprobado' : 'Rechazado'; //OPERADOR TERNARIO
// console.log(`Resultado ${status2}`);

if (average >= 5.5){
    status2 = 'Aprobado';
}
else{
    status2 = 'Rechazado';
}

console.log(`Resultado ${status2}`);

let max = 0;

const a = 5;
const b = 8;
const c = 3;

//Alternativa mas corta al if (ternario)
max = a > b ? a : b;
max = max > c ? max : c;

console.log(`El número mayor es: ${max}`);
