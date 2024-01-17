export const invoice = {
    id: 10,
    name: 'Componentes PC',
    client: {
        name: 'Pepe',
        lastName: 'Doe',
        address : {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 12
        }
    },
    company: {
        name: 'New Egg',
        fisicalNumber: 1234567,
    },
    items: [
        {
            id: 1,
            product: 'CPU Intel i7',
            price: 499,
            quantify : 1,
        },
        {
            id: 2,
            product: 'Corsair Keyboard Mecanico',
            price: 150,
            quantify : 2,
        },
        {
            id: 3,
            product: 'Monitor Asus',
            price: 350,
            quantify : 1,
        },
    ]
}