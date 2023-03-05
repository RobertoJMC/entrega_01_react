import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import './CartContainer.css'
import trash from '../../assets/red-trash.png'
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'

const CartContainer = () => {

  const mostrarId = () => {
    const [mid,setMid] = useState([])
    const db = getFirestore() 
    const queryCollections = collection(db, 'orders')
    getDocs(queryCollections)
    .then(resp => setMid( resp.docs.map(product => ({ id: product.id, ...product.data()} ) )))
    .catch(err => console.error(err))
    alert(mid.id)
  }


  const [formData, setFormData] = useState( {
    name: '',
    phone: '',
    email:'',
    repetirEmail: ''
} )

  const {cartList, vaciarCarrito, precioTotal, eliminarProducto} = useCartContext()

  const insertarOrder = (evt) => {
    evt.preventDefault()
    const order = {}
    order.buyer = formData

    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    
    addDoc(ordersCollection, order)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(() => {
        vaciarCarrito()
        setFormData({
            name: '',
            phone: '',
            email:'',
            repetirEmail: ''
        })
      })
  }

  const handleOnChange = (evt) => {
    setFormData({
        ...formData,
        [evt.target.name]: evt.target.value
    })
}

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
            <form onSubmit={insertarOrder} >
                <input 
                    type="text" 
                    name="name"          
                    placeholder = "Ingrese el nombre"   
                    onChange={handleOnChange} 
                    value={formData.name}

                /><br />
                <input 
                    type="text" 
                    name="phone"         
                    placeholder = "Ingrese el teléfono" 
                    onChange={handleOnChange} 
                    value={formData.phone}

                /><br />
                <input 
                    type="text" 
                    name="email"         
                    placeholder = "Ingrese el email"    
                    onChange={handleOnChange} 
                    value={formData.email}

                /><br />
                <input 
                    type="text" 
                    name="repetirEmail"  
                    placeholder = "Repetir el email"    
                    onChange={handleOnChange} 
                    value={formData.repetirEmail}

                /><br />
                <button className="btn btn-outline-success" type="submit" onClick={mostrarId}>Generar orden</button>
            </form>
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