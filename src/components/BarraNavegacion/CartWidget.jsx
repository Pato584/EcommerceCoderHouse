import React from 'react'
import carrito from "../../Images/BarraNavegacion/Carrito.png"
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cantidadTotal } = useContext(CartContext)
    let cantidad = cantidadTotal()
    return (
        <Link to="/carrito" className="cartwidget">
            <div className='divPrincipalCartWidget'>
                <img className="logoPagina" src={carrito} alt="" />
                <div>
                    <p>{cantidad > 0 && cantidad}</p>
                </div>
            </div>
        </Link>
    )
}

export default CartWidget
