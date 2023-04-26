import React from 'react'
import FooterMenu from '../../components/footerMenu/FooterMenu';
import CalendarReserv from '../../components/Calendar/CalendarReserv';
import './Reservas.scss'
import logo from '../../assets/logo.svg'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';
import { BsFillCalendarCheckFill } from "react-icons/bs";

const Reservas = () => {
    const { user } = useSelector(store => store.user)
    
    const miEvento = {
        title: 'Mi evento',
        start: new Date(2023, 3, 25),
        end: new Date(2023, 3, 25),
        color: '#d80416',
        cod: '3'
    };
    const otroEvento = {
        title: 'La casa de bernarda alba',
        start: new Date(2023, 3, 30),
        end: new Date(2023, 3, 30),
        color: '#d80416',
        cod: '8'
    };
    let array = [miEvento, otroEvento]
    return (
        <motion.div
            initial={{ opacity: -1 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1 }}
            className='secReserv'>
            <header className='secReserv_head'>
            <BsFillCalendarCheckFill className="secReserv_headicon" />
                <h2>Tus Reservas</h2>
            </header>
            <section className='secReserv_calendar'>
            <CalendarReserv eventos={array} />
            </section>
            <FooterMenu />
        </motion.div>
    )
}

export default Reservas