import { useState } from "react";
import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {

    // El useState devuelve un array con dos elementos:
    // 1. La variable de estado.
    // 2. Una función para actualizar esa variable de estado.


    const {id, name, client, company, items : itemsInitial, total} = getInvoice(); //Se obtienen las variables por medio de la destructuración

    const [formItemsState, setFormItemsState] = useState({ //Uso del useState para el formulario en general
        product: '',
        price : '',
        quantifye : '',
    });

    const {product, price, quantify} = formItemsState; //Destructuración para el form

    // const [productValue, setProductValue] = useState('');
    // const [priceValue, setPriceValue] = useState('');
    // const [quantifyValue, setQuantifyValue] = useState('');

    const [items, setItems] = useState(itemsInitial); //Uso del useState para los items iniciales

    const [counter, setCounter] = useState(4); //Uso del useSate para el contador del id que empieza en 4 prque en la data hay tres items

    const onInputChange = ({target: {name, value}}) => {
        console.log(name);
        console.log(value);
        setFormItemsState({
            ...formItemsState,
            [name]: value
            });
        }

    const onInvoiceItemsSubmit = (event) => {
        event.preventDefault();
        if(product.trim().length <= 1 || price.trim().length < 1 || isNaN(price.trim()) || quantify.trim().length < 1 || isNaN(quantify.trim())){
            alert("Error en el formulario"); return;
        }

        //SetItems función que permite actualizar la tabla con los items existentes mas los que se les va agregando
        setItems([...items, {
        id : counter,
        product: product.trim(),
        price: +price.trim(), //Si anteponemos un + autmaticamente se convierte el String en entero o por medio edel parseInt()
        quantify: parseInt(quantify.trim(), 10)
        }]);

        setFormItemsState({
            product : '',
            price : '',
            quantify : '',
        });

        setCounter(counter+1); //Para incrementar el id
    }

    return (
        <>
            <div className="container">
                <div className="card my-3">

                    <div className = "card-header">
                        <h1>Ejemplo factura</h1>
                    </div>

                    <div className="card-body">
                        <InvoiceView id={ id } name={ name }/>
                        <div className="row my-4">
                            <div className="col">
                                <ClientView tittle="Datos del cliente" client={client}/>
                            </div>
                            <div className="col">
                                <CompanyView tittle="Datos de la empresa" company = {company}/>
                            </div>
                        </div>
                        <div className="py-3">
                            <ListItemsView tittle="Productos de la factura" items={items}/>
                            <TotalView total = { total }/>
                            <form className="w-50" onSubmit= {onInvoiceItemsSubmit}>

                                <input type="text" name="product" value={product} placeholder="Producto" className="form-control m-3" onChange={onInputChange}/>

                                <input type="text" name="price" value={price} placeholder="Precio" className="form-control m-3" onChange={ event => onInputChange(event)}/> {/* E onChange esta es otra forma de llamar la función con el evento */}
                                <input type="text" name="quantify" value={quantify}  placeholder="Cantidad" className="form-control m-3" onChange={onInputChange}/>

                                <button type="submit" className="btn btn-primary ms-3">Nuevo Item</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}