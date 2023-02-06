import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'

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
  
        {loading ? <h2>Cargando...</h2> 
        :
        productos.map(producto => <div key={producto.id}>
                                          <div class="row row-cols-1 row-cols-md-3 g-4">
                                            <div class="col" className="card h-100 w-100"> 
                                              <div class="card h-100" className='w-100'>
                                                  <img src={producto.imagen} class="card-img-top" alt="imagen"/>
                                                  <div class="card-body">
                                                      <h5 class="card-title">{producto.nombre}</h5>
                                                      <p class="card-text"> Precio: {producto.precio}</p>
                                                  </div>
                                                  <div class="card-footer">
                                                    <p class="card-text">{producto.detalle}</p>
                                                  </div>
                                              </div>
                                            </div>
                                          </div>
                                  </div>)}
    </div>
    </>
  )
}

export default ItemDetailContainer