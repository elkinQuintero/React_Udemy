import { useEffect, useReducer } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { itemsReducer } from "./reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./reducer/itemsActions";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || []; //SI CONTIENE ALGO LO PASA A UN OBJEO TODOS LOS ITEMS, SI NO, ENTONCES MUSTRA VACIO

export const CartApp = () => {

    // const [cartItems, setCartItems] = useState(initialCartItems);

    const [cartItems, dispatch ] = useReducer(itemsReducer, initialCartItems);


    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    },[cartItems])

    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem){
            dispatch(
                {
                    type: UpdateQuantityProductCart,
                    payload: product, //Es el objeto que vamos a enviar a la acción update
                }
            );
        } else {
            dispatch(
                {
                    type: AddProductCart,
                    payload: product,
                }
            );
        }

    }

    const handlerDeleteProductCart = (id) => {
        dispatch (
            {
                type: DeleteProductCart,
                payload: id,
            }
        );
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