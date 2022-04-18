import { AnimatePresence, motion } from "framer-motion";
import { modalVariants } from "../utils/framer-motion-variants/variants";
import React from "react";
import "./style.css";

function Modal({ showModal }) {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {showModal && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="modalWrapper"
          >
            <div className="modalContent">
              <h3>Would you like to create anotehr pizza?</h3>
              <button>Let's do it!</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Modal;

