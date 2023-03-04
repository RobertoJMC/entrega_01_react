import { createContext, useContext, useState } from "react";


export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([]);

    const agregarCarrito = (newProducto) => {

        const idxProd = cartList.findIndex(product => product.id === newProducto.id)
        if(idxProd!==-1){
            cartList[idxProd].cantidad += newProducto.cantidad
            setCartList([...cartList])
            return 
        }

        setCartList([
            ...cartList,
            newProducto
        ])
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    const precioTotal = () => cartList.reduce( (count, producto) => count += (producto.cantidad*producto.precio), 0)
    
    const cantidadTotal = () => cartList.reduce( (count, producto) => count += producto.cantidad, 0)

    const eliminarProducto = (id) => setCartList(cartList.filter(producto => producto.id !== id))


    return(
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarProducto
        }}>
        
        {children}
        </CartContext.Provider>
    )
}