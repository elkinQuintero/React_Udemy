import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

const initialUsers = [
    {
        id: 1,
        username: 'Elkin',
        password: '12345',
        email: 'elkin12345@gmail.com'
    },
];

const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: '',
};

export const useUsers = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);
    const [visibleForm, setVisibleForm] = useState(false);

    const handlerAddUser = (user) => {
        // console.log(user);
        // let type = (user.id === 0) ? 'addUser' : 'updateUser';

        // if(user.id === 0)
        // {
        //     type = 'addUser';
        // }
        // else
        // {
        //     type = 'updateUser';
        // }

        dispatch({
            type: (user.id === 0) ? 'addUser' : 'updateUser',
            payload: user,
        });

        Swal.fire({
            tittle: (user.id === 0) ? "Usuario Creado" : "Usuario Actualizado",
            text: (user.id === 0) ? "El usuario ha sido creado con exito!" : "El usuario ha sido actualizado con exito!",
            icon: "success"
        });

        handlerCloseForm();
    }

    const handlerRemoveUser = (id) => {
        // console.log(id);

        Swal.fire({
            title: "Esta seguro que desea eliminar?",
            text: "Cuidado, el usuario será eliminado!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar"
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'removeUser',
                    payload: id,
                })
                Swal.fire({
                    title: "Usuario Eliminado",
                    text: "El usuario ha sido eliminado con exito!",
                    icon: "success"
                });
            }
          });
    }

    const handlerUpdateUser = (user) => {
        //console.log(user);
        setUserSelected({...user});
        setVisibleForm(true);
    }

    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserForm);
    }

    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUpdateUser,
        handlerOpenForm,
        handlerCloseForm,
    }
}