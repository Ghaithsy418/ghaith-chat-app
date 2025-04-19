"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface WelcomeTypes {
  children: ReactNode;
}

const WelcomeText: React.FC<WelcomeTypes> = function ({ children }) {
  return (
    <motion.h1
      variants={variants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="bg-gradient-to-r from-indigo-300 via-indigo-100 to-indigo-50 bg-clip-text p-2 text-4xl font-bold text-transparent sm:text-5xl"
    >
      {children}
    </motion.h1>
  );
};

const variants = {
  hidden: {
    opacity: 0,
    fontSize: "42px",
  },
  visible: {
    opacity: 1,
    fontSize: "48px",
    transtition: {
      duration: 1,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 250,
      dumping: 200,
      mass: 3,
    },
  },
};

export default WelcomeText;
