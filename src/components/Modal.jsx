import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ children, images }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="flex bg-white p-16 rounded-2xl w-[90%] h-[80%]"
        >
          {/* Left Column for Images with Vertical Scroll */}
          <div className="flex-3 w-[60%] overflow-y-scroll custom-scrollbar mr-20">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full mb-10"
              />
            ))}
          </div>

          {/* Right Column for Description */}
          <div className="flex-1 overflow-y-scroll custom-scrollbar">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
