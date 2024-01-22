import { useEffect, useState } from "react";

export const FormItemsView = ({handler}) => {

    const [formItemsState, setFormItemsState] = useState({ //Uso del useState para el formulario en general
        product: '',
        price : '',
        quantify : '',
    });

    const {product, price, quantify} = formItemsState; //Destructuración para el form

    useEffect(() => {
        //
    }, [price])

    useEffect(() => {
        //
    }, [formItemsState])

    const onInputChange = ({target: {name, value}}) => {
        // console.log(name);
        // console.log(value);
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

        handler(formItemsState);

        setFormItemsState({
            product : '',
            price : '',
            quantify : '',
        });
    }


    return (
        <>
            <form className="w-50" onSubmit= {onInvoiceItemsSubmit}>

            <input type="text" name="product" value={product} placeholder="Producto" className="form-control m-3" onChange={onInputChange}/>

            <input type="text" name="price" value={price} placeholder="Precio" className="form-control m-3" onChange={ event => onInputChange(event)}/> {/* E onChange esta es otra forma de llamar la función con el evento */}

            <input type="text" name="quantify" value={quantify}  placeholder="Cantidad" className="form-control m-3" onChange={onInputChange}/>

            <button type="submit" className="btn btn-primary ms-3">Nuevo Item</button>
            </form>
        </>
    )
}