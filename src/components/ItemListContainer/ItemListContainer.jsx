import db from "../../db/db.js";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from 'react'
import ItemList from './ItemList';
import useLoading from '../hooks/useLoading';
import { useParams } from 'react-router-dom';

import "./ItemListContainer.css"

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const { idCategory } = useParams()

  const { isLoading, showLoading, hideLoading, loadingScreen } = useLoading()

  const obtenerProductos = () => {
    showLoading(true)
    const productosRef = collection(db, "productos")
    getDocs(productosRef)
      .then((respuesta) => {
        const data = respuesta.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data() }
        })
        setProductos(data)
      })
      .finally(() => {
        hideLoading()
      });
  }

  const obtenerProductosFiltrados = () => {
    const productosRef = collection(db, "productos")
    const q = query(productosRef, where("categoria", "==", idCategory))
    getDocs(q)
      .then((respuesta) => {
        const data = respuesta.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data() }
        })
        setProductos(data)
      });
  }


  useEffect(() => {

    if (idCategory) {
      obtenerProductosFiltrados()
    } else {
      obtenerProductos()
    }

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
