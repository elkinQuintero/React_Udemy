
const user = {
    username: 'elkin',
    email: 'elkin12345@gmail.com',
    age: 24,
    ranking: 9,
}

// const detail = (user) => {
//     const { username, email } = user;

//     return `El detalle del usuario ${username} con correo ${email}`;
// }

//Otra forma
const detail = ( {username, email} ) => {
    return `El detalle del usuario ${username} con correo ${email}`;
}
console.log(detail(user));