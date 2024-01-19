import { invoice } from "../data/invoice"

export const getInvoice = () => {
    // let total = 0;
    // invoice.items.forEach(item => {
    //     total = total + item.price * item.quantify;
    // });
    // return {...invoice, total};

    //OTRA FORMA
    const total = calculateTotal(invoice.items);

    return {...invoice, total};
}

export const calculateTotal = (items = []) => {
    return items
        .map(item => item.price * item.quantify) //Devuelve un nuevo arreglo en base al arreglo items y la operación que se haga internamente en a función
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0) //Reduce tiene dos argumentos uan funció de flecha que va haciendo el calculo y sumando y el valor por defecto del acumulador (cero)
}