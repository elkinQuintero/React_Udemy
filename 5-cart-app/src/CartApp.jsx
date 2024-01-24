import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

const initialCartItems = [
    {
        product: {}, //El producto maneja id, nombre, precio, descrpción por eso es un objeto
        quantity: 0,
        total: 0,
    }
];

export const CartApp = () => {

    const [cartItems, setCartItems] = useState(initialCartItems);

    const handlerAddProductCart = (product) => {

    }

    return (
        <>
            <div className="container">
                <h3>Cart App</h3>
                <CatalogView/>
                <div className="my-4 w-50">
                    <CartView items={cartItems}/>
                </div>
            </div>
        </>
    )
}