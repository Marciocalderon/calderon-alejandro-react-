import './App.css'
import React from 'react'
import NavBar from './components/navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Cart from './components/Cart'

function App(){
  return (
    <BrowserRouter>
    <NavBar />
      <Routes> 
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/> 
        <Route path="cart" element={<Cart/>}/> 
      </Routes>
    </BrowserRouter>
  )
}
export default App
