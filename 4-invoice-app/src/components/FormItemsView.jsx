
export const FormItemsView = () => {
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