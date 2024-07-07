import "./NavBar.css"
import logo from "../../Images/BarraNavegacion/Logo.png"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
//Creo el componente.
const NavBar = () => {

    return (

        <header className="navbar">

            <Link to="/" className="logoPagina">
                <img src={logo} alt="" />
            </Link>

            <nav className="botonesNavBar">
                <Link to="/category/Instrumentos"><button className="botonNavBar">Instrumentos</button></Link>

                <Link to="/category/Audio"><button className="botonNavBar">Audio</button></Link>

                <Link to="/category/Accesorios"><button className="botonNavBar">Accesorios</button></Link>
            </nav>

            <div className="carrito">
                <CartWidget />
            </div>


        </header>


    )
}

//Exporto el componente.
export default NavBar
