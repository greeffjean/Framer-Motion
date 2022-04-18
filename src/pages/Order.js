import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  containerVariants, childVariants
} from "../utils/framer-motion-variants/variants";
import Modal from "../components/Modal";

const Order = ({ pizza, showModal, setShowModal }) => {
  const [showMsg, setShowMsg] = useState(true);

  setTimeout(() => setShowMsg(false), 4000);

  useEffect(() => {
    setTimeout(() => setShowModal(true), 5000);
  }, []);

  return (
    <>
      {/* Modal */}
      <Modal showModal={showModal} setShowModal={setShowModal} />
      {/* Modal */}

      <motion.div
        className="container order"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <AnimatePresence>
          {showMsg && (
            <motion.h2 exit={{ opacity: 0, scale: 0.5 }}>
              Thank you for your order :)
            </motion.h2>
          )}
        </AnimatePresence>

        <motion.div variants={childVariants}>
          <p>You ordered a {pizza.base} pizza with:</p>
          {pizza.toppings.map((topping) => (
            <div key={topping}>{topping}</div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Order;
