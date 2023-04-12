import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppStart from '../components/appStar/AppStart'
import SignIn from '../login/signIn/SignIn'



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppStart />} />
                <Route path='/login' element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router