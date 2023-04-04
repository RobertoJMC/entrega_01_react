import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import ItemDetail from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {

    const [producto,setProductos] = useState([])
    const [loading,setLoading] = useState(true)
    
    const {idProducto} = useParams()

    useEffect(()=>{        
      const db = getFirestore() 
      const query = doc(db, 'productos', idProducto)
      getDoc(query)
      .then(resp => setProductos( { id: resp.id, ...resp.data() } ))
      .catch(error => console.log(error))
      .finally(()=> setLoading(false))
  }, [])

  return (
    <>

    <div className='saludo'>
  
        {loading ? (<div className="spinner-border" role="status">
                      <span className="visually-hidden">Cargando...</span>
                  </div>)
        :
        (<ItemDetail producto={producto} />)}
    </div>
    </>
  )
}

export default ItemDetailContainer