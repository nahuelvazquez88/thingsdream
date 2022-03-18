import { useEffect, useState } from 'react';
import { Catalogue } from '../Catalogue/Catalogue';
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"

export const ItemListContainer = () => {

  const [listaProductos, setListaProductos] = useState([])
  const [loading, setLoading] = useState(false)

  

  const { catId } = useParams()

  // const traerDatos = () => {
  //   return new Promise( (resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(listaProductos)
  //     }, 3000)
  //   })
  // }

  // traerDatos()

  console.log(listaProductos)

  useEffect( () => {
    setLoading(true)


  const productosRef = collection(db, 'productos')
  const q = catId ? query(productosRef, where("category", "==", catId)) : productosRef

  getDocs(q)
    .then((resp) => {
      setListaProductos( resp.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }))
    })
    .finally(() => {
      setLoading(false)
    })

    }, [catId])
  
  
  return (
    <>
      {
        loading 
        ? <h2>Loading...</h2> 
        : <Catalogue productos={listaProductos} />
      }
    </>
  );
};
