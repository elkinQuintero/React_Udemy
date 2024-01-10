
const papper = {
    product: 'papper',
    price: 100,
    quantify: 10
};

//Hace que el arreglo invoices se pueda exportar
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

const invoiceByClientName = (clientName) => {
    return invoices.find(i => i.client.name === clientName);
}

const invoiceById = (id) => {
    return invoices.find(i => i.id === id);
}

const findInvoiceById = (id) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout( () => {
            const result = invoiceById(id);
            if(result){
                resolve(result);
            }
            else{
                reject('Error: no existe factura con ese id');
            }
        }, 2500)
    });
    return promise;
};

export {
    papper,
    invoices as default,
    invoiceByClientName,
    invoiceById,
    findInvoiceById,
}
