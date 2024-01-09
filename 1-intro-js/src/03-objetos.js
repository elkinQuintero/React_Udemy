
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


invoice.client.name = 'Santiago'; //Asi puedo modificar un atributo de ese objeto invoice.
// invoice.total = 100000;
console.log(invoice);
console.log(`total: ${invoice.total()}`);

console.log(invoice.greeting());