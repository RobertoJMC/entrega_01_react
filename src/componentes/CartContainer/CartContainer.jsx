import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import './CartContainer.css'
import trash from '../../assets/red-trash.png'

const CartContainer = () => {

  const {cartList, vaciarCarrito, precioTotal, eliminarProducto} = useCartContext()
  
  return (
    <>
    <div className='cabeceraCarrito'>
        <div>
            {cartList.length === 0 ? (
              <p className='borde'>El carrito esta vacio</p>
            ):
            <p className='borde'>{precioTotal() !== 0 && `Total de la compra: ${precioTotal()}`}</p>
            }
        </div>
        <div>
            <button class="btn btn-outline-dark" onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>  
    </div>
    <div className='carrito'>
       {cartList.map(producto =>
        <div key={producto.id}>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col" className="card h-100 w-100"> 
                    <div class="card h-100" className='w-100'>
                        <img src={producto.imagen} class="card-img-top" className='w-15 h-25' alt="imagen"/>
                        <div class="card-body">
                            <h5 class="card-title">{producto.nombre}</h5>
                            <p class="card-text"> Precio: {producto.precio}</p>
                            <p class="card-text"> Cantidad: {producto.cantidad}</p>
                            <p class="card-text"> Total: {producto.cantidad * producto.precio}</p>
                        </div>
                        <div class="card-footer">
                            <button className="btn btn-outline-dark" onClick={()=> eliminarProducto(producto.id)}>
                                <img src={trash} alt="eliminar" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
    </div>
  </>
  )
}

export default CartContainer