import { Button } from 'react-bootstrap';
import Carrito from '../assets/cart.svg';
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
const { getQty } = useContext(cartContext)
  
return (
    <Button as={Link} to='/cart' > <img className='cartWidget_img' src= {Carrito} alt="Carrito"></img> { getQty()} </Button>
)
}

export default CartWidget;
