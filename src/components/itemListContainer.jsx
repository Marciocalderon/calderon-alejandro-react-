import { useEffect, useState } from "react";
import ItemList from './itemList'
import { useParams } from "react-router-dom";

function  ItemListContainer ()  {
  const [items, setItem] = useState([])
  const {id} = useParams()
  const products = `https://dummyjson.com/products`
  const catproducts = `https://dummyjson.com/products/category/${id}`
  
    useEffect(() => {
          fetch(id ? catproducts : products)
          .then(res => res.json())
          .then(res => setItem(res.products));
  },[id, catproducts])

    return (
      <ItemList items={items}/>
    )
  }
  
  export default ItemListContainer;