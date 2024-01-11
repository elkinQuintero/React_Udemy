

//FETCH: La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global fetch() (en-US) que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.
const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

//FORMA 1
// httpClient.then(response => {
//     response.json().then(data => {
//         console.log(data);
//     });
// });

//FORMA 2
//Esto es asincrono, tiene un delay porque es una promise
httpClient
    .then(response => response.json())
    .then(data => console.log(data));

//Esto es sincrono es decir se ejecuta de una
console.log('Hola que tal');