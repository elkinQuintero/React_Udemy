function sayHello()
{
    const greeting = 'Hola mundo function';
    return greeting;
}

const result = sayHello();
console.log(result);
//console.log(sayHello());


function sayHelloname(name = 'Santiago', age = 24)
{
    const greeting = `Hola mundo function ${name} edad ${age}`; //Si no se le pasa los parametros de name y age, pone po defecto los que tiene la función
    return greeting;
}

// Otra forma
const sayHelloname_otra = function(name = 'Santiago', age = 24)
{
    const greeting = `Hola mundo function ${name} edad ${age}`; //Si no se le pasa los parametros de name y age, pone po defecto los que tiene la función
    return greeting;
}

console.log(sayHelloname_otra('Elkin', 30));


//Función FLECHA

const funcion_flecha = (name= 'Elkin', age = 24) => `Hola mundo function ${name} edad ${age}`; //Si es una sola linea de codigo, se puede asi. Si no, toca utilizar las llaves despues de la flecha

console.log(`FUNCION FLECHA ${funcion_flecha('Elkin', 30)}`);


const add = (a = 0 , b = 0) => a+b;

console.log(add(20,30));