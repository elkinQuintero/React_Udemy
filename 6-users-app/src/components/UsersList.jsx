import { UserRow } from "./UserRow"

export const UsersList = ({handlerUpdateUser, handlerRemoveUser, users}) => {
    return (

        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(({id, username, email, password}) => ( //Importante que el map siempre va con parentesis despues del =>
                        <UserRow key={id} id={id} username={username} email={email} password={password} handlerRemoveUser={handlerRemoveUser} handlerUpdateUser={handlerUpdateUser} />
                    ))
                }
            </tbody>
        </table>

    )

}