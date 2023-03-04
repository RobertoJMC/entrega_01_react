import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div>
        <div key={producto.id}>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col" className="card h-100 w-100"> 
                    <div class="card h-100" className='w-100'>
                        <img src={producto.imagen} class="card-img-top" alt="imagen"/>
                        <div class="card-body">
                            <h5 class="card-title">{producto.nombre}</h5>
                            <p class="card-text"> Precio: {producto.precio}</p>
                        </div>
                        <div class="card-footer">
                            <Link to={`/detalle/${producto.id}`}>
                                <button class="btn btn-outline-dark">Detalles</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item