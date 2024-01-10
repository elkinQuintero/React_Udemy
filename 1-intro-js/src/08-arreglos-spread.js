
const products = ['mesa','silla','notebook','teclado'];

products.push('pantalla lcd'); //Push añade elementos al arreglo original
const products2 = products.concat('Lapicero', 'mouse');

const fruits = ['peras', 'manzanas', 'sandias', 'frutillas'];

const mercado = [...products, ...fruits, 'Lechuga', 'papas', 'uvas']; //Asi ponemos los elementos de los arreglos anteriores en el arreglo de mercado. SPREAD

//EN REACT SE UTILIZA MAS EL SPREAD QUE EL CONCAT

console.log(products);
console.log(products2);
console.log(mercado);

