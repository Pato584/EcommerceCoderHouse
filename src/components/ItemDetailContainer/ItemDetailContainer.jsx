import { useState, useEffect } from "react"
//import { obtenerProductos } from "../../data/data"
import ItemDetail from "./ItemDetail"
import useLoading from '../hooks/useLoading';
import { useParams } from "react-router-dom"
import db from "../../db/db.js";
import { doc, getDoc,} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})

  const { idProduct } = useParams()

  const obtenerProducto = () => {
    showLoading(true)
    const docRef = doc(db,"productos", idProduct)
    getDoc(docRef)
    .then((respuesta)=> {
      const data = {id: respuesta.id, ...respuesta.data()}
      setProducto(data)
    })
    .finally(() => {
      hideLoading()
    });
  }
  const { isLoading, showLoading, hideLoading, loadingScreen } = useLoading()

  useEffect(() => {
  obtenerProducto()
  }, [])

  return (
    isLoading ? loadingScreen : <ItemDetail producto={producto} />
    
  )
}

export default ItemDetailContainer
