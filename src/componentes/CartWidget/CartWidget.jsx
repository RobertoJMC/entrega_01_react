import imagen from '../../assets/carrito_compras.png'
import './CartWidget.css'

const CartWidget = ({contador}) =>{
    return(
        <>
        <button>
            <img src={imagen} alt="carrito" className='img' />
            {contador}
        </button>

        </>
    )
}
export default CartWidget