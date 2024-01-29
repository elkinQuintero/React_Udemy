import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || []; //SI CONTIENE ALGO LO PASA A UN OBJEO TODOS LOS ITEMS, SI NO, ENTONCES MUSTRA VACIO

export const CartApp = () => {

    const [cartItems, setCartItems] = useState(initialCartItems);

    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem){
            setCartItems([
                ...cartItems.filter((i) => i.product.id !== product.id),
                {
                    product,
                    quantity: hasItem.quantity + 1,
                }
            ]);
        } else {
            setCartItems([
                ...cartItems,
                {
                    product,
                    quantity: 1,
                }
            ]);
        }

    }

    const handlerDeleteProductCart = (id) => {
        setCartItems([
            ...cartItems.filter((i) => i.product.id !== id)
        ]);
    }

    return (
        <>
            <div className="container my-4">
                <h3>Cart App</h3>
                <CatalogView handler={ handlerAddProductCart }/>

                {cartItems?.length <= 0 ||
                    ( //Si el tamaño es menor o igual a 0 no muestra nada, sino muestra lo ue alla en la lista d items
                        <div className="my-4 w-50">
                            <CartView items={cartItems} handlerDelete={ handlerDeleteProductCart }/>
                        </div>
                    )
                }

            </div>
        </>
    )
}