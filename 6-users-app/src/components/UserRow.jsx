export const UserRow = ({handlerUpdateUser, handlerRemoveUser, id, username, email}) => {

    return (

        <tr key={id}>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td><button type="button" className="btn btn-secondary btn-sm" onClick={() => handlerUpdateUser({id, username, email})}>Update</button></td>
            <td><button type="button" className="btn btn-danger btn-sm" onClick={() => handlerRemoveUser(id)}>Delete</button></td>
        </tr>
    )
}