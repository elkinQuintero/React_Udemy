
//OBJETO invoice => Factura
const invoice = {
    id: 10,
    name: 'Compra de oficina',
    date: new Date(),
    //Se puede tener un objeto dentro de otro objeto, asi:
    client: {
        id: 2,
        name: 'Elkin',
        lastName: 'Quintero',
        age: 24,
    },
    //Lista de objetos
    items: [
        {
            product: 'keyboard',
            price: 300,
            quantify: 2,
        },
        {
            product: 'mouse',
            price: 200,
            quantify: 1,
        },
        {
            product: 'paper',
            price: 100,
            quantify: 10,
        },
    ],

    total: function() {
        let total = 0;
        //A continuación se hara el calculo del total por medio de una foreach que recorre cada item
        this.items.forEach(item => {
            total = total + item.price * item.quantify;
        });
        return total;
    },

    greeting: function() { //Las funciones de un objeto deben ser con function, no se puede flecha.
        return `Hola ${this.client.name}` //This se utiliza para poder utilizar las variables del mismo objeto.
    }
};


// const invoice2 = invoice; //Asi se copia un objeto tal cual con tdos sus atributos
// --- SPREAD ---
const invoice2 = { ...invoice}; // Asi se clona un objeto apuntando a otro espacio de memoria, SPREAD, es decir, realiza una instancia del objeto invoice

const result = invoice == invoice2; //result es un bool que compara si invoice es igual a invoice2, en este caso es true

if (result) console.log(result);
else console.log('No son iguales');

invoice2.id = 20; //El los elementos de invoice2 automaticamente modifica los de invoice porque estan apuntando al mismo espacio de memoria.

console.log(invoice.id);
console.log(invoice2.id);