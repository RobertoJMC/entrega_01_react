import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div>
        <div key={producto.id}>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="card h-100 w-100 col"> 
                    <div className='w-100 card h-100'>
                        <img src={producto.imagen} className="card-img-top" alt="imagen"/>
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text"> Precio: {producto.precio}</p>
                        </div>
                        <div className="card-footer">
                            <Link to={`/detalle/${producto.id}`}>
                                <button className="btn btn-outline-dark">Detalles</button>
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