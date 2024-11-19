import { useEffect, useState } from "react";
import ItemList from './itemList'
import { useParams } from "react-router-dom";

function  ItemListContainer ()  {
  const [items, setItem] = useState([])
  const {id} = useParams()
  console.log(id)

  const getProducts = async() => {
    const res=await fetch('https://dummyjson.com/products')
    const parsed=await res.json()
    setItem(parsed.products);
  }

  useEffect(() => {
      getProducts()
      fetch(`https://dummyjson.com/products/categories/${id}`)
        .then(res => res.json())
        .then(console.log)
  },[id])
    return (
      <ItemList items={items}/>
    )
  }
  
  export default ItemListContainer;