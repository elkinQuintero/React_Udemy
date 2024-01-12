export const RowItemView = ({product, price, quantify}) => {
    return (
        <>
            <tr>
                <td>{ product }</td>
                <td>{ price }</td>
                <td>{ quantify }</td>
            </tr>
        </>
    )
}