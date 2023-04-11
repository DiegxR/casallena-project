import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppStar from '../components/appStar/AppStar'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppStar/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router