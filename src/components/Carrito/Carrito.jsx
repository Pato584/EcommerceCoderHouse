import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Carrito.css";

const Carrito = () => {
  const { carrito, borrarProductoPorId, vaciarCarrito, precioTotal } = useContext(CartContext);

  //Early Return, Return temprano

  if (carrito.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2>No hay productos en el carrito </h2>
        <Link to="/">Ver productos</Link>
      </div>
    );
  }

  return (
    <div className="carrito">
      <h2>Productos en el carrito</h2>
      {carrito.map((productoCarrito) => (
        <div className="carta" key={productoCarrito.id}>
          <img src={productoCarrito.imagen} width={100} alt="" />
          <p>{productoCarrito.nombre}</p>
          <p>Precio c/u: ${productoCarrito.precio}</p>
          <p>Cantidad: {productoCarrito.cantidad}</p>

          <button className="boton" onClick={() => borrarProductoPorId(productoCarrito.id)}>Borrar producto</button> 
        </div>
      ))}
      <p>Precio Total: {precioTotal()}</p>
      <button className="boton" onClick={vaciarCarrito}>
        <p>Vaciar carrito</p>
      </button>
      <Link className="botoncontinuar" to="/checkout">Continuar con la compra</Link>
    </div>
  );
};
export default Carrito;