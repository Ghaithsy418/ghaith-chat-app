"use client";

import { motion, Variants } from "framer-motion";
import React, { ReactNode } from "react";

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
      className="bg-linear-to-r from-indigo-300 via-indigo-100 to-indigo-50 bg-clip-text px-2 text-center text-4xl font-bold text-transparent sm:text-5xl"
    >
      {children}
    </motion.h1>
  );
};

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 200,
      mass: 3,
    },
  },
};

export default WelcomeText;
