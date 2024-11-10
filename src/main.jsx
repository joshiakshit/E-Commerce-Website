import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Women from './components/Women/Women.jsx'
import Men from './components/Men/Men.jsx'
import Company from './components/Company/Company.jsx'
import Stores from './components/Stores/Stores.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import Cart from './components/Cart/Cart.jsx'
import Search from './components/Search/Search.jsx'
import Product from './components/Product/Product.jsx'
import Root from './Root.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './components/Dashboard/Dashboard.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Root />}>
        <Route path='' element={<Home />} />
        <Route path='women' element={<Women />} />
        <Route path='men' element={<Men />} />
        <Route path='company' element={<Company />} />
        <Route path='stores' element={<Stores />} />
        <Route path='search' element={<Search />} />
        <Route path='cart' element={<Cart />} />
        <Route path='product' element={<Product />} />
        <Route path='dashboard' element = {<Dashboard/>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register />} />
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
