import { useState, useContext } from "react";
import Formulario from "./Formulario";
import { CartContext } from "../../context/CartContext";
import db from "../../db/db";
import { collection, addDoc } from "firebase/firestore";


const Checkout = () => {
    const { carrito, precioTotal } = useContext(CartContext)
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
    });
    const [idOrden, setIdOrden] = useState()

    const guardarDatosInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
    };

    const enviarOrden = (event) => {
        event.preventDefault()
        const datos = {
            comprador: { ...datosForm },
            productos: [...carrito],
            total: precioTotal()
        }
        subirOrden(datos)
    }

    const subirOrden = (datos) => {
        const ordenesRef = collection(db, "ordenes")
        addDoc(ordenesRef, datos)
            .then((respuesta) => {
                setIdOrden(respuesta.id)
            })
    }
    return (
        <div>
            {
                idOrden ? (
                    <div className="divOrden">
                        <h2>Orden Generada con exito!!</h2>
                        <p>Guarde el id de la orden: {idOrden}</p>
                    </div>
                ):(
            
            <Formulario datosForm={datosForm} guardarDatosInput={guardarDatosInput} enviarOrden={enviarOrden} />
        )}
        </div>
    );

};
export default Checkout;