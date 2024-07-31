import React from 'react'
import carrito from "../../Images/BarraNavegacion/Carrito.png"

const CartWidget = () => {
    return (

            <div className='divPrincipalCartWidget'>
                <img className="logoPagina" src={carrito} alt="" />
                <div>
                    <p>1</p>
                </div>
            </div>





    )
}

export default CartWidget
