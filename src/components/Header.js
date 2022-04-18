import React from 'react';
import { motion } from 'framer-motion';
import { svgVariants } from "../utils/framer-motion-variants/variants";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>
      </div>
      <motion.div className="title"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, type: 'spring' }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;