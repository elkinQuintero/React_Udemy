import { invoiceById, findInvoiceById } from "./data/invoices";

//Las promesas son un proceso asincrono, se ejecutan una ve termine la opeación sincrona o lineal. Se utiliza mucho en fronted con react o angular, se ejecuta en un proceso independiente que si se realiza bien se maneja con el then, en caso de error con el catch
// const promise = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         const result = invoiceById(2);
//         if(result){
//             resolve(result);
//         }
//         else{
//             reject('Error: no existe factura con ese id');
//         }
//     }, 2500)
// });

// const findInvoiceById = (id) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout( () => {
//             const result = invoiceById(id);
//             if(result){
//                 resolve(result);
//             }
//             else{
//                 reject('Error: no existe factura con ese id');
//             }
//         }, 2500)
//     });
//     return promise;
// };

// promise.then( (json) => {
//     console.log(json);
// }).catch( (error) => {
//     console.error(error);
// });

//Mejor asi
findInvoiceById(1)
    .then(console.log)
    .catch(console.error);