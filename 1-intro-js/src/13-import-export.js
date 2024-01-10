import invoiceByClientName, { invoices, papper } from "./data/invoices";

//Solamente se puede tener unna por defecto en ests caso (invoiceByClientName), la cual debe ir por fuera de ls llaves.

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

console.log('Buscar por nombre de cliente');
console.log(invoiceByClientName('Pepe'));

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