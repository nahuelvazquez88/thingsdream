import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { productos } from '../../data/productos.js';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState(null)
  const { itemId } = useParams()

  const traerDatos = () => {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    })
  }

    

    // useEffect(() => {
    //     setLoading(true)

    //     traerDatos()
    //         .then((res) => {
    //           if (itemId){
    //             setItem( res.find((el) => el.id === Number(itemId)) )
    //         }})
    //         .finally(() => {
    //             setLoading(false)
    //         })
    // }, [])

  useEffect(() => {
    setLoading(true)

    // 1.- referencia al document
    const docRef = doc(db, "productos", itemId)
    // 2.- peticion del doc
    getDoc(docRef)
      .then((doc) => {
        setItem({id: doc.id, ...doc.data()})
      })
      .finally(()=> {
        setLoading(false)
      })
  }, [])


  return (
    <div className='container my-5'>
      {
        loading 
          ? <h2>Loading...</h2>
          : <ItemDetail {...item}/>
      }
    </div>
  );
};