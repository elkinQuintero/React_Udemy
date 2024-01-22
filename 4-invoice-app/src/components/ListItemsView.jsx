import PropTypes from 'prop-types';
import { RowItemView } from "./RowItemView";

export const ListItemsView = ({tittle, items, handlerDeleteItem}) => {
    return (
        <>
            <h4>{ tittle }</h4>
            <table className="table table-primary table-striped">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {/* De la siguiente manera se iteran los items, utilizando el map que clona el arreglo de items y lo itera en la tabla*/}
                    {/* {items.map(item => {
                        return (
                            <tr key={ item.id }>
                                <td>{ item.product }</td>
                                <td>{ item.price }</td>
                                <td>{ item.quantify }</td>
                            </tr>
                        )
                    })} */}

                    {/* OTRA FORMA */}
                    {items.map(({id,product,price,quantify}) => (
                            <RowItemView key={id} id = {id} product={product} price={price} quantify={quantify} handlerDeleteItem={id => handlerDeleteItem(id)}/>
                        )
                    )}
                </tbody>
            </table>
        </>
    )
}

//prop-types se usa para validaciones desde el frontend
ListItemsView.propTypes = {
    tittle: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}