
const users = ['Pepe', 'Ana', 'Maria', 'Juan', 'Sebastian', 'Carlos', 'Josefa'];

const [pepe, b, maria, , , ...rest] = users;

console.log(pepe, b, maria, ...rest);