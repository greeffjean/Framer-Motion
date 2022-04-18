import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVariants, buttonVariants } from "../utils/framer-motion-variants/variants";
import Loader from "../components/Loader";

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button
        variants={buttonVariants}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
