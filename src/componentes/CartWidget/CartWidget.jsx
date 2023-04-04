import imagen from '../../assets/carrito_compras.png'
import { useCartContext } from '../../context/CartContext';
import './CartWidget.css'

const CartWidget = () =>{

    const { cantidadTotal } = useCartContext();

    return(
        <>
        <button className="btn btn-outline-dark">
            <img src={imagen} alt="carrito" className='img' />
            {cantidadTotal()}
        </button>

        </>
    )
}
export default CartWidget