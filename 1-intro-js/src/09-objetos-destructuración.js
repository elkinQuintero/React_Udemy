
const user = {
    username: 'elkin',
    email: 'elkin12345@gmail.com',
    age: 24,
    ranking: 9,
}
//Destructuración de objetos
const { username, ranking, age } = user;

//Se puede hacer asi tambien la destrucción de objetos pero es mas engorroso
// const username = user.username;
// const ranking = user.ranking;
// const age = user.age;

console.log(username);
console.log(ranking);
console.log(age);
console.log(`${username} tiene ${age} años y está en el ranking número ${ranking}`);