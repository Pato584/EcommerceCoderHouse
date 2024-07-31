import { Link } from "react-router-dom"


const Item = ({ producto }) => {
    return (

        <div className="item" >

            <div>
                <img src={producto.imagen} width={200} alt="" />
            </div>
            <div>
                <p>{producto.nombre}</p>
                <p>Precio: USD {producto.precio}</p>
            </div>
            <div className="contDetalles">
                <Link to={"/detail/" + producto.id}>
                    <button className="btnDetalles">Ver detalles</button>
                </Link>
            </div>

        </div>


    )
}

export default Item
