import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ItemDetail = ({ producto }) => {
    const { agregarProducto } = useContext(CartContext);
    const agregarAlCarrito = (contador) => {
        const productoCarrito = {
          ...producto,
          cantidad: contador,
        };
        agregarProducto(productoCarrito);
      };

    return (
        <div className="item-detail">
            <h1>{producto.nombre}</h1>
            <div>
                <img src={producto.imagen} width={200} alt={producto.nombre} />
            </div>
            <div>
                <p>Precio: USD {producto.precio}</p>
                <p>Stock: {producto.stock} Unidades.</p>
                <ItemCount agregarAlCarrito={agregarAlCarrito} stock={producto.stock} />
            </div>
            <div className="descripcion">
                <h2>Descripción:</h2>
                <p>{producto.descripción}</p>
            </div>
        </div>
    );
}

export default ItemDetail;

