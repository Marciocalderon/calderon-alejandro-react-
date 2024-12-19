import Button  from 'react-bootstrap/Button'
import { useState } from 'react'
import { useContext } from 'react'
import { cartContext } from '../context/cartContext'

function ItemCount (item) {
    const [ count, setCount] =  useState(0)
    const {addToCart} = useContext(cartContext)

    const handleAdd = () => setCount(count + 1)
    const handleSub = () => {
        if (count > 0) setCount(count - 1);
      };

    const handleAddTocart = () => {
        addToCart({...item, quantity: count})
    }
      
return(
<div className='itemCount'>
 <p className='text-center border'>{count}</p>
<div>
<Button
    variant="outline-danger"
    className='w-50'
    onClick={handleSub}
>
    -
</Button>
<Button
    variant="outline-success"
    className='w-50'
    onClick={handleAdd}
>
+
</Button>
</div>
<Button onClick= {handleAddTocart }
    variant="outline-primary"
    className='w-100'
    >Agregar al carrito</Button>
</div>
)
}
export default ItemCount