import ListGroup from 'react-bootstrap/ListGroup';
import { useContext } from 'react'
import { cartContext } from '../context/cartContext'

function Cart(){
    const {cart} = useContext(cartContext)

    console.log(cart)
    
    return(
        <div className='cart'>
           <ListGroup >
            {cart.map( prod =>(
                <ListGroup.Item key={prod.id}>{prod.detail.title} x {prod.quantity} </ListGroup.Item>
            ))}
        </ListGroup> 
        </div>
    )
}

export default Cart