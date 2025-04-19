"use client";

import { useClickOutside } from "@/app/_hooks/useClickOutside";
import { motion } from "framer-motion";
import React, {
  cloneElement,
  createContext,
  Dispatch,
  JSXElementConstructor,
  PropsWithChildren,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiX } from "react-icons/hi";

const modalContext = createContext<modalType | null>(null);

const Modal = function (props: PropsWithChildren) {
  const { children } = props;
  const [isOpen, setIsOpen] = useState("");
  const close = () => setIsOpen("");
  return (
    <modalContext.Provider value={{ isOpen, setIsOpen, close }}>
      {children}
    </modalContext.Provider>
  );
};

const Open = function (props: openType) {
  const { children, name } = props;
  const context = useContext(modalContext);
  if (!context) throw new Error("Modal.Open must be used within Modal");
  const { setIsOpen } = context;
  return cloneElement(children as React.ReactElement<childrenProps>, {
    onClick: () => setIsOpen(name),
  });
};

const Window: React.FC<windowType> = function ({ children, name }) {
  const context = useContext(modalContext);
  if (!context) throw new Error("Modal.Window must be used within Modal");
  const { isOpen, close } = context;
  const ref = useClickOutside(close, true);
  if (isOpen !== name) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute top-0 left-0 flex h-[100vh] w-[100vw] items-center justify-center bg-slate-950/80 backdrop-blur-xs backdrop:blur-md"
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        ref={ref}
        className="bg-main fixed mb-20 flex min-w-[21rem] flex-1 flex-col gap-5 rounded-lg border-2 border-indigo-300/20 p-5 shadow-lg shadow-indigo-100/10 sm:min-w-[30rem]"
      >
        <button
          className="cursor-pointer place-self-end rounded-full p-2 text-[20px] transition-all duration-300 hover:bg-slate-100 hover:text-red-500 sm:text-[24px]"
          onClick={close}
        >
          <HiX />
        </button>
        {cloneElement(children as React.ReactElement<{ close?: () => void }>, {
          close,
        })}
      </motion.div>
    </motion.div>,
    document.body,
  );
};

Modal.Open = Open;
Modal.Window = Window;

interface modalType {
  isOpen: string;
  setIsOpen: Dispatch<SetStateAction<string>>;
  close: () => void;
}

interface openType {
  children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  name: string;
}

type childrenProps = {
  readonly onClick?: React.MouseEventHandler<HTMLElement>;
};

interface windowType {
  children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  name: string;
}

const variants = {
  hidden: {
    opacity: 0,
    y: "-30%",
    scale: 0.6,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default Modal;
