import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {

    const [productos,setProductos] = useState([])
    const [loading,setLoading] = useState(true)

    const {idCategoria} = useParams()

    useEffect(()=> {
      if(idCategoria){
        gFetch()
        .then(res => {
          setProductos(res.filter(productos => productos.categoria == idCategoria))
        }
        )
        .catch(error => console.log('Fallo todo'))
        .finally(()=> setLoading(false))
      }
      else{
        gFetch()
        .then(res => {
          setProductos(res)
        }
        )
        .catch(error => console.log('Fallo todo'))
        .finally(()=> setLoading(false))
      }
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
