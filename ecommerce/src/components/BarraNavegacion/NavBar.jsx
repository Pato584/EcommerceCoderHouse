import "./NavBar.css"
import logo from "../../Images/BarraNavegacion/Logo.png"
import CartWidget from "./CartWidget"
//Creo el componente.
const NavBar = () => {

    return (
        
        <header className="navbar">

            <div className="logoPagina">
                <img src={logo} alt="" />
            </div>
            
            <nav className="botonesNavBar">
                <button className="botonNavBar">Instrumentos</button>
                <button className="botonNavBar">Audio</button>
                <button className="botonNavBar">Accesorios</button>
            </nav>

            <div className="carrito">
                <CartWidget/>
            </div>

            
        </header>

  
    )
}

//Exporto el componente.
export default NavBar
