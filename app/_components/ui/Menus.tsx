"use client";

import { useClickOutside } from "@/app/_hooks/useClickOutside";
import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";

const menuContext = createContext<menuTypes | null>(null);

function Menus(props: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState("");
  const close = () => setIsOpen("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <menuContext.Provider
      value={{ isOpen, setIsOpen, close, position, setPosition }}
    >
      {props.children}
    </menuContext.Provider>
  );
}

function Menu(props: PropsWithChildren) {
  return (
    <div className="flex items-center justify-center rounded-md">
      {props.children}
    </div>
  );
}

function Toggle(props: toggleAndListTypes) {
  const { children, id } = props;
  const context = useContext(menuContext);
  if (!context) throw new Error("Menus.Toggle shouldn't be used out of it");
  const { close, isOpen, setIsOpen, setPosition } = context;

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();

    const target = e.currentTarget;

    if (isOpen === "" || isOpen !== id) {
      setIsOpen(id);
    } else {
      close();
    }

    const rect = target.getBoundingClientRect();

    if (rect) {
      setPosition({
        x: window.innerWidth - rect.x - rect.width - 40,
        y: rect.y + rect.height + 8,
      });
    }
  }
  return <div onClick={handleClick}>{children}</div>;
}

function List(props: toggleAndListTypes) {
  const { children, id } = props;
  const context = useContext(menuContext);
  if (!context) throw new Error("Menus.List shouldn't be used out of Menus");
  const { isOpen, position, close } = context;
  const ref = useClickOutside(close, false);
  if (isOpen !== id) return null;
  return createPortal(
    <div
      ref={ref}
      className={`absolute flex flex-col divide-y-1 divide-gray-400 rounded-md bg-gray-200/80 text-slate-900 shadow-md`}
      style={{ top: `${position.y}px`, right: `${position.x}px` }}
    >
      {children}
    </div>,
    document.body,
  );
}

function Button(props: buttonTypes) {
  const { children, icon, onClick } = props;

  return (
    <button
      onClick={onClick}
      className="flex h-10 cursor-pointer items-center justify-between gap-3 bg-inherit px-3 py-4 text-sm transition-all duration-300 first:rounded-t-md last:rounded-b-md hover:bg-gray-300/50"
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

interface menuTypes {
  isOpen: string;
  setIsOpen: Dispatch<SetStateAction<string>>;
  close: () => void;
  position: { x: number; y: number };
  setPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
}

interface toggleAndListTypes {
  children: ReactNode;
  id: string;
}

interface buttonTypes {
  children: ReactNode;
  icon: ReactNode;
  onClick?: () => void;
}

export default Menus;
