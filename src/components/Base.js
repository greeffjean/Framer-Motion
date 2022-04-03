import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/*
Creating animation variants for framer motion.
**/
const containerVariants = {
  hidden: {
    transform: "scale(1.5)",
    opacity: 0,
  },
  visible: {
    transform: "scale(1.0)",
    opacity: 1,
  },
};

const buttonVariants = {
  hidden: {
    x: "20vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring" },
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{
                scale: 1.3,
                color: "#d6b25b",
                originX: 0,
              }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 3px rgb(250, 250, 250)",
                textShadow: "0px 0px 3px rgb(250, 250, 250)",
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
