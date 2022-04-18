import { motion } from 'framer-motion';
import React from 'react';
import "./style.css";
import { loaderVariants } from "../utils/framer-motion-variants/variants";

function Loader() {
    return (<>
    <motion.div className="loader" variants={loaderVariants} animate="animationOne">
    </motion.div>
    </> );
}

export default Loader;