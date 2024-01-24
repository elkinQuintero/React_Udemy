import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = () => {
    const [products, setProducts] = useState([]); //Uso del useState para crear la variable y la función a la que se le van a setear los productos

    useEffect( //Entra por primera vez aqui y obtiene le asigna a products los productos qu hay en el arreglo por medio de la función getProducts
        () => {
            setProducts(getProducts());
        }, []
    );
    return (
        <>
            <div className="row">
                {/* map sirve para listar el arreglo de productos por medio de la variable prod */}
                {products.map(prod => (
                    <div className="col-4 my-2" key={prod.id}>
                        <ProductCardView id={prod.id} name={prod.name} description={prod.description} price={prod.price}/>
                    </div>
                ))}
            </div>
        </>
    )
}