
const products = ['mesa','silla','notebook','teclado'];

products.push('pantalla lcd');

console.log(products);

// products.forEach(function(el){
//     console.log(el);
// })

// otra forma

products.forEach(el => console.log(el)); //itera cada elemento del array.

// La forma tradicional

for(const prod of products){
    console.log(prod);
}

for (let i = 0; i < products.length; i++) {
    const element = products[i];
    console.log(element);
}

console.log(products[0]);