import { useState, useEffect } from "react"
import { obtenerProductos } from "../../data/data"
import ItemDetail from "./ItemDetail"
import useLoading from '../hooks/useLoading';
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})

  const { idProduct } = useParams()

  const { isLoading, showLoading, hideLoading, loadingScreen } = useLoading()

  useEffect(() => {
    showLoading(true)
    obtenerProductos()
      .then((data) => {
        const productoFiltrado = data.find((productoData) => productoData.id === idProduct)
        setProducto(productoFiltrado)
      })
      .finally(() => {
        hideLoading()
        console.log("Finalizo la promesa");
      });
  }, [])

  return (
    isLoading ? loadingScreen : <ItemDetail producto={producto} />
    
  )
}

export default ItemDetailContainer
