

//FETCH: La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global fetch() (en-US) que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.
// const httpClient = fetch('https://jsonplaceholder.typicode.com/users');


// httpClient
//     .then(response => response.json())
//     .then(data => console.log(data));

//Recordar esta es una función de flecha y el async significa que es asincrona
// const findAllUsers = async() => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     return await response.json();
// }
//el await se utiliza para esperar que se procese una promesa y asi obtener los datos, porque las promises son asincronas.
// const users = await findAllUsers();
// console.log(users);
// console.log('Hola que tal');


const findAllUsers = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    //Crea una lista
    const ul = document.createElement('ul');
    //Recorre todo los user
    users.forEach(user => {
        //Crea los elementos de la lista
        const li = document.createElement('li');
        //Los va agregando a la lista
        li.innerText = user.name;
        ul.append(li);
        console.log(user.name);
    });
    //Agrega toda la lista al root que es el id del body en el html
    document.getElementById('root').append(ul);
}

findAllUsers();
console.log('Hola que tal');