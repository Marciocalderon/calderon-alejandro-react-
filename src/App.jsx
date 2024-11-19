import './App.css'
import React from 'react'
import NavBar from './components/navbar'
import ItemListContainer from './components/itemListContainer'
import ItemCount from './components/ItemCount'
import itemDetailContainer from './components/itemDetailContainer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App(){
  return (
    <BrowserRouter>
    <NavBar />
      <Routes> 
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
