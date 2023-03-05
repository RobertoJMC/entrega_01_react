import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { gFetch } from '../../utils/gFetch'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'


export const ItemListContainer = ({greeting}) => {

    const [productos,setProductos] = useState([])
    const [loading,setLoading] = useState(true)

    const {idCategoria} = useParams()

    useEffect(()=>{
      setLoading(true)
      const db = getFirestore() 
      const queryCollections = collection(db, 'productos')
  
      const queryFilter = idCategoria ? query(queryCollections, where('categoria','==', idCategoria) ) : queryCollections    
      
      getDocs(queryFilter)
      .then(resp => setProductos( resp.docs.map(product => ({ id: product.id, ...product.data() } ) )))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))    
    }, [idCategoria])

return (
  <>

  <div className='saludo'>

      {loading ? (<div class="spinner-border" role="status">
                      <span class="visually-hidden">Cargando...</span>
                  </div>)
      :
      (<ItemList productos={productos} />)
        }
  </div>
  </>
  )
}
export default ItemListContainer
