import React from 'react'
import Home from '../pages/Home'
import Modal from '../pages/Modal'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Router() {
  return (

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='Home/:id' element={<Modal />} />
        </Routes>
    </BrowserRouter>
    )
};


export default Router;