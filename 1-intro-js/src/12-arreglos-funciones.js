
const papper = {
    product: 'papper',
    price: 100,
    quantify: 10
};
//Arreglo de facturas
const invoices =
[
    {
        id: 1,
        name: 'Compra de oficina',
        //Se puede tener un objeto dentro de otro objeto, asi:
        client: {
            name: 'Elkin',
            lastName: 'Quintero',
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
            papper,

        ]
    },
    {
        id: 2,
        name: 'Compra de computación',
        //Se puede tener un objeto dentro de otro objeto, asi:
        client: {
            name: 'Pepe',
            lastName: 'Quintero',
        },
        //Lista de objetos
        items: [
            {
                product: 'keyboard',
                price: 300,
                quantify: 2,
            },
            {
                product: 'Screen 17',
                price: 500,
                quantify: 1,
            },
            {
                product: 'cpu intel',
                price: 1000,
                quantify: 10,
            },
        ]
    },
    {
        id: 3,
        name: 'Compra de papeleria',
        //Se puede tener un objeto dentro de otro objeto, asi:
        client: {
            name: 'Maria',
            lastName: 'Quintero',
        },
        //Lista de objetos
        items: [
            {
                product: 'keyboard',
                price: 300,
                quantify: 2,
            },
            {
                product: 'pencil',
                price: 50,
                quantify: 1,
            },
            papper,
        ]
    }
];

//El map ayuda a clonar un arreglo pero que retorna un nuevo arreglo
console.log('MAP');
const invoicesName = invoices.map(i => {
    return i.name;
})
console.log(invoices);
console.log(invoicesName);

const invoicesClient = invoices.map(i => {
    return i.client.name;
})
console.log(invoicesClient);


//FIND
console.log('FIND');
const invoiceById = invoices.find(i => i.id === 3);
console.log(invoiceById);

const invoiceByName = invoices.find(i => i.name === 'Compra de oficina');
console.log(invoiceByName);

//FILTER
//Sirve para filtrar campos
console.log('FILTER');
const invoiceFilter = invoices.filter( i => i.id > 1)
console.log(invoiceFilter);

const invoiceFilter2 = invoices.filter( i => i.items.includes(papper));
console.log(invoiceFilter2);

// No muestra la factura con id 2
console.log('Filter Deleted')
const invoiceDeleted = invoices.filter( i => i.id != 2)
console.log(invoiceDeleted);


//SOME devulve un bool dependiendo si existe o no la condición
console.log('SOME');
const result = invoices.some( i => i.client.name === 'Pepe');
console.log(result);

//OBJETO {}
//ARREGLO []