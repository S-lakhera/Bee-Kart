import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../screens/Home'
import Products from '../screens/Products'
import About from '../screens/About'
import Cart from '../screens/Cart'
import Login from '../components/Login'
import Register from '../components/Register'
import AuthLayout from '../screens/AuthLayout'

const AppRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/auth' element={<AuthLayout/>} >
                <Route index element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
            </Route>
        </Routes>
    )
}

export default AppRoute
