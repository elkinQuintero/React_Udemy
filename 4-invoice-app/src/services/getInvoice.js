import { invoice } from "../data/invoice"

export const getInvoice = () => {
    let total = 0;
    invoice.items.forEach(item => {
        total = total + item.price * item.quantify;
    });
    return {...invoice, total};
}