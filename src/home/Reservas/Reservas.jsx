import React from 'react'
import FooterMenu from '../../components/footerMenu/FooterMenu';
import CalendarReserv from '../../components/Calendar/CalendarReserv';
import './Reservas.scss'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { useEffect } from 'react';
import { useState } from 'react';

const Reservas = () => {
    const { user } = useSelector(store => store.user)
    const [events, setEvents] = useState([])
    useEffect(() => {
        user.dates.forEach(element => {
            console.log(element)
            const date = element.currentDate.split('/')
            const month = date[1].substring(0,1) == '0' ? Number(date[1].substring(1)) : Number(date[1])
            console.log(date, month)
            const event = {
                title: element.name, 
                start: new Date(Number(date[2]),month-1,Number(date[0])),
                end: new Date(Number(date[2]),month-1,Number(date[0])),
                color: '#d80416',
                cod: element.cod
            }
            setEvents(ev=> [...ev, event])
        });
    }, [user])
    
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
            <CalendarReserv eventos={events} />
            </section>
            <FooterMenu />
        </motion.div>
    )
}

export default Reservas