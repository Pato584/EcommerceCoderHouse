import "./ItemDetail.css"
const ItemDetail = ({ producto }) => {
    return (
        <div className="item-detail">
            <h1>{producto.nombre}</h1>
            <div>
                <img src={producto.imagen} width={200} alt={producto.nombre} />
            </div>
            <div>
                <p>Precio: USD {producto.precio}</p>
                <p>Stock: {producto.stock} Unidades.</p>
                <button>Agregar al Carrito</button>
            </div>
            <div className="descripcion">
                <h2>Descripción:</h2>
                <p>{producto.descripción}</p>
            </div>
        </div>
    );
}

export default ItemDetail;
