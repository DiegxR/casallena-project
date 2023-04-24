import React from 'react'
import FooterMenu from '../../components/footerMenu/FooterMenu';
import CalendarReserv from '../../components/Calendar/CalendarReserv';
import './Reservas.scss'
import logo from '../../assets/logo.svg'
import { motion } from 'framer-motion'
const Reservas = () => {
    const miEvento = {
        title: 'Mi evento',
        start: new Date(2023, 3, 25),
        end: new Date(2023, 3, 25),
        color: '#d80416',
        cod: '3'
    };
    let array = [miEvento]
    return (
        <motion.div
            initial={{ opacity: -1 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1 }}
            className='secReserv'>
            <header className='secReserv_head'>
                <img src={logo} alt="" />
                <h2>Tus Reservas</h2>
            </header>
            <CalendarReserv eventos={array} />
            <FooterMenu />
        </motion.div>
    )
}

export default Reservas