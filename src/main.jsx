import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from '../src/router/Router'
import './main.scss'
import { Provider } from 'react-redux'
import store from './redux/store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router />
    </Provider>
)
