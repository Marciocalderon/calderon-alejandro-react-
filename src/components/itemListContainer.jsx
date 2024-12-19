import { useEffect, useState } from "react";
import ItemList from './ItemList'
import { useParams } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { getProducts } from "../firebase/db";

function  ItemListContainer ()  {
  const [items, setItem] = useState([])
  const {id} = useParams()
/*   const products = `https://dummyjson.com/products`
  const catproducts = `https://dummyjson.com/products/category/${id}`
 */  
    useEffect(() => {
/*           fetch(id ? catproducts : products)
          .then(res => res.json())
          .then(res => {
            setTimeout(() => {
              setItem(res.products)
          }, 2000)
        })
 */        getProducts()
 .then(products => setItem(products) )
      }, [id]);

  if(items.length == 0) {
    return (
      <div className="loader">
        <RingLoader 
            color="#33ff80"
            size={200}
            speedMultiplier={1}
/>
      </div>
    )
  }

    return (
      <ItemList items={items}/>
    )
}
  
  export default ItemListContainer;