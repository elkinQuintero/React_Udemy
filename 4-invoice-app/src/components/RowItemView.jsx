import PropTypes from 'prop-types';
export const RowItemView = ({id, product, price, quantify, handlerDeleteItem}) => {
    return (
        <>
            <tr>
                <td>{ product }</td>
                <td>{ price }</td>
                <td>{ quantify }</td>
                <td><button className='btn btn-danger' onClick={() => handlerDeleteItem(id)}>Eliminar</button></td>
            </tr>
        </>
    )
}

RowItemView.propTypes = {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantify: PropTypes.number.isRequired,
}