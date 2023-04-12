import React from 'react'
import loading from '../../assets/loading.svg'
import { motion } from 'framer-motion'
import './styles.scss'

const Loading = () => {
  return (
    <section className='loading'>
        <figure className='loading_container'>
            <motion.img 
            animate={{
                rotate: 360,
              }}
              transition={{
                duration: 1.7,
                ease: "linear",
                repeat: Infinity,
              }}
            src={loading} alt="" />
            <span>Danos un momento</span>
        </figure>
    </section>
  )
}

export default Loading