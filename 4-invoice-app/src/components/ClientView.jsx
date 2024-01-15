import PropTypes from 'prop-types';
export const ClientView = ({tittle, client}) => {
    const {name: nameClient, lastName, address: {country, city, street, number}} = client;
    // const {country, city, street, number} = address;
    return (
        <>
            <h3>{ tittle }</h3>
            <ul className="list-group">
                <li className="list-group-item active">{nameClient} {lastName}</li>
                <li className="list-group-item">{country} / {city}, {street} {number} </li>
            </ul>
        </>
    )

}

//Validaciones
ClientView.propTypes = {
    tittle: PropTypes.string.isRequired,
    client: PropTypes.object.isRequired,
}