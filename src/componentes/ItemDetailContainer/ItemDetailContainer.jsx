import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import ItemDetail from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {

    const [productos,setProductos] = useState([])
    const [loading,setLoading] = useState(true)
    
    const {idProducto} = useParams()

    useEffect(()=> {
        if(idProducto){
          gFetch()
          .then(res => {
            setProductos(res.filter(productos => productos.id == idProducto))
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
      }, [idProducto])



  return (
    <>

    <div className='saludo'>
  
        {loading ? (<div class="spinner-border" role="status">
                      <span class="visually-hidden">Cargando...</span>
                  </div>) 
        :
        productos.map(producto => <ItemDetail producto={producto} />)}
    </div>
    </>
  )
}

export default ItemDetailContainer