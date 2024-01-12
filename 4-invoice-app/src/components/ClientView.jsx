export const ClientView = ({tittle, client}) => {
    const {name: nameClient, lastName, address} = client;
    const {country, city, street, number} = address;
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