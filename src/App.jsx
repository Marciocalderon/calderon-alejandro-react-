import { useState } from 'react'
import './App.css'
import React from 'react'
import NavBar from './components/navbar'
import ItemListContainer from './components/itemListContainer'

function App(){
  return (
    <>
       <NavBar/>
       <ItemListContainer
       text= 'Tienda de Ropa'
       ></ItemListContainer>
       </>
  )
}



export default App
