export const usersReducer = (state = [], action) => {

    switch (action.type) {
        case 'addUser':
            return [
                ...state,
                {
                    ...action.payload,
                    id: new Date().getTime(),
                }
            ];

        case 'removeUser':
            return state.filter(user => user.id !== action.payload); //filtra todos los usuarios, menos el usuario con el mismmo id qu se este utilizando

        default:
            return state;
    }
}