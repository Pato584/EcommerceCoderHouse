
import { obtenerProductos } from '../../data/data'
import { useState, useEffect } from 'react'
import ItemList from './ItemList';
import useLoading from '../hooks/useLoading';
import { useParams } from 'react-router-dom';

import "./ItemListContainer.css"

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const { idCategory } = useParams()

  const { isLoading, showLoading, hideLoading, loadingScreen } = useLoading()

  useEffect(() => {
    //Mostramos pantalla de carga
    showLoading()

    obtenerProductos()
      .then((respuesta) => {
        if (idCategory) {
          const productosFiltrados = respuesta.filter((producto) => producto.categoria === idCategory)
          setProductos(productosFiltrados)
        } else {
          setProductos(respuesta);
        }
      })
      .catch((respuesta) => {
        console.log(respuesta);
      })
      .finally(() => {
        hideLoading()
        console.log("Finalizo la promesa");
      });
  }, [idCategory])

  return (
    <div className='itemlistcontainer'>
      {
        isLoading ? loadingScreen : <ItemList productos={productos} />
      }

    </div>
  );
}

export default ItemListContainer
