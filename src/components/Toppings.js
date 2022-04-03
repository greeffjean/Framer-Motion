import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <div className="toppings container">
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
            whileHover={{
              scale: 1.3,
              color: '#d6b25b',
              originX: 0
            }}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: '0px 0px 3px rgb(250, 250, 250)',
          textShadow: '0px 0px 3px rgb(250, 250, 250)'
        }}
        >
          Order
        </motion.button>
      </Link>

    </div>
  )
}

export default Toppings;