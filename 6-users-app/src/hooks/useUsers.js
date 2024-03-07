import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";

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

    const handlerAddUser = (user) => {
        // console.log(user);
        let type;
        if(user.id === 0)
        {
            type = 'addUser';
        }
        else
        {
            type = 'updateUser';
        }

        dispatch({
            type,
            payload: user,
        })
    }

    const handlerRemoveUser = (id) => {
        // console.log(id);
        dispatch({
            type: 'removeUser',
            payload: id,
        })
    }

    const handlerUpdateUser = (user) => {
        console.log(user);
        setUserSelected({...user});

    }

    return {
        users,
        userSelected,
        initialUserForm,

        handlerAddUser,
        handlerRemoveUser,
        handlerUpdateUser,
    }
}