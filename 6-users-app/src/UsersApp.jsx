import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";


export const UsersApp = () => {

    const {
        users,
        userSelected,
        initialUserForm,
        handlerAddUser,
        visibleForm,
        handlerRemoveUser,
        handlerUpdateUser,
        handlerCloseForm,
        handlerOpenForm,
    } = useUsers();

    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
                {!visibleForm ||
                    <div className="col">
                        <UserForm  initialUserForm={initialUserForm} handlerAddUser={handlerAddUser} userSelected={userSelected} handlerCloseForm={handlerCloseForm}/>
                    </div>
                }
                <div className="col">
                    {visibleForm || <button className="btn btn-primary my-2" onClick={handlerOpenForm}>Nuevo Usuario</button>}
                    {users.length === 0
                        ? <div className="alert alert-warning">No hay usuarios en el sistema!</div>
                        : <UsersList handlerUpdateUser= {handlerUpdateUser} handlerRemoveUser = {handlerRemoveUser} users={users}/>
                    }
                </div>
            </div>
        </div>

    );
}