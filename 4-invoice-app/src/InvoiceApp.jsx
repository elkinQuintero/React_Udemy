import { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { FormItemsView } from "./components/FormItemsView";


const invoiceInitial = {
        id: 0,
        name: '',
        client: {
            name: '',
            lastName: '',
            address : {
                country: '',
                city: '',
                street: '',
                number: 0
            }
        },
        company: {
            name: '',
            fisicalNumber: 0,
        },
        items: []
    }

export const InvoiceApp = () => {

    // El useState devuelve un array con dos elementos:
    // 1. La variable de estado.
    // 2. Una función para actualizar esa variable de estado.


    // const {id, name, client, company, items : itemsInitial, total} = getInvoice(); //Se obtienen las variables por medio de la destructuración


    //De la siguiente frma optimizamos para que lea la primera vez lo que hay en la data y ya

    const [activeForm, setActiveForm] = useState(false);

    const [total, setTotal] = useState(0);

    const [invoice, setInvoice] = useState(invoiceInitial);

    const [items, setItems] = useState([]); //Uso del useState para los items iniciales

    const [counter, setCounter] = useState(4); //Uso del useSate para el contador del id que empieza en 4 prque en la data hay tres items

    //Destructuramos la factura para tener los datos por variable
    const {id, name, client, company} = invoice;


    //UseEffect => función que se dispara cuando en los corchetes cuando el componente se crea o cuando cambia alguna dependecia o variable que se pone en los []
    //Nos permite ejecutar efectos secuandarios cuando algo cambia o en el ciclo de vida, es decir, cuando el componenete se crea
    useEffect(() => {
        const data =  getInvoice(); //Obtenemos los datos de la factura y los guardamos en data
        console.log(data);
        setInvoice(data); //También seteamos los valores de invoice
        setItems(data.items); //Y seteamos los valores iniciales para los items
    }, []);

    useEffect(() => {
        //
    }, [counter])

    //En pocas palabras el use effect se ejecuta una vez cuando se crea el componente o también se le puede colocar dependencias
    useEffect(() => {
        setTotal(calculateTotal(items));
    }, [items])

    // const [productValue, setProductValue] = useState('');
    // const [priceValue, setPriceValue] = useState('');
    // const [quantifyValue, setQuantifyValue] = useState('');


    const handlerAddItems = ({ product, price, quantify}) => {

        //SetItems función que permite actualizar la tabla con los items existentes mas los que se les va agregando
        setItems([...items, {
            id : counter,
            product: product.trim(),
            price: +price.trim(), //Si anteponemos un + autmaticamente se convierte el String en entero o por medio edel parseInt()
            quantify: parseInt(quantify.trim(), 10)
        }]);

        setCounter(counter+1); //Para incrementar el id
    }

    const handlerDeleteItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const onActiveForm = () => {
        setActiveForm(!activeForm);
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
                            <ListItemsView tittle="Productos de la factura" items={items} handlerDeleteItem={id => handlerDeleteItem(id)}/>
                            <TotalView total = { total }/>
                            <button className="btn btn-secondary" onClick={onActiveForm}>{ !activeForm? 'Agregar Item' : 'Cerrar Form' }</button>
                            { !activeForm? '' : <FormItemsView handler={handlerAddItems}/>}
                            {/* <FormItemsView handler={(newItem) => handlerAddItems(newItem)}/>  */}


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}