import React, { useContext, useState } from 'react'
import { CartContext, useCartContext } from '../../context/CartContext';
import InputCount from '../InputCount/InputCount';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({producto}) => {

    const { agregarCarrito } = useCartContext();
    const [inputType, setInputType] = useState("button");

    const onAdd = (cant) => {
        agregarCarrito ({...producto, cantidad: cant})
        setInputType("input");
    }

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
                                <p class="card-text">{producto.detalle}</p>
                                <div>
                                    {inputType === "button" ? (
                                    <ItemCount initial={1} stock={30} onAdd={onAdd} />
                                    ) : (
                                    <InputCount />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ItemDetail