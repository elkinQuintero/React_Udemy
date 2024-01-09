
let firstname = 'Elkin'; //Variable
firstname = 'Santiago';

const lastname = 'Quintero';
//lastname = 'Estrada'; //NO SE PUEE RENOMBRAR UNA CONSTANTE

const condicion = true;
if (condicion)
{
    const lastname = 'Ramirez'; //Esta constante solo serviria dentro del if
    console.log(lastname);
}
console.log('Hola mundo ' + firstname + ' ' + lastname);
console.log(`Hola mundo ${firstname} ${lastname}`); //Otro formato para imprimir