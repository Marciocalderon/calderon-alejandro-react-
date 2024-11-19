import Button  from 'react-bootstrap/Button'
import { useState } from 'react'

function ItemCount () {
    const [ count, setCount] =  useState(0)
    const handleAdd = () => setCount(count + 1)
    const handleSub = () => {
        if (count > 0) setCount(count - 1);
      };
      
return(
<div>
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
<Button 
    variant="outline-primary"
    className='w-100'
    >Agregar al carrito</Button>
</div>
)
}
export default ItemCount