import { useNavigate } from "react-router-dom";

export const ProductCardView = ({id, name, description, price, handler}) => {
  const navigate = useNavigate();

  const onAddProduct = (product) => {
    console.log(product);
    handler(product);
    navigate('/cart');
  }

  return (
    <>
        <div className="card">
            <div className="card-body">
                <h5 className="card-tittle">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{price}</p>
                <button className="btn btn-primary" onClick={() => onAddProduct({id, name, description, price})}>Agregar</button> {/* Aqui estamos pasando un objeto  con los atributos del producto, osea se estructura un objeto de producto*/}
            </div>
        </div>
    </>
  )
}
