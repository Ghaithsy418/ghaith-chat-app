import React from "react";
import Menus from "./Menus";
import { HiDotsHorizontal } from "react-icons/hi";
import { iconClassName } from "@/app/_helpers/classNames";
import { HiAcademicCap } from "react-icons/hi2";

function GeneralMenu() {
  return (
    <Menus>
      <Menus.Menu>
        <Menus.Toggle id="general">
          <HiDotsHorizontal className={iconClassName} />
        </Menus.Toggle>
        <Menus.List id="general">
          <Menus.Button icon={<HiAcademicCap />}>Button 1</Menus.Button>
          <Menus.Button icon={<HiAcademicCap />}>Button 2</Menus.Button>
          <Menus.Button icon={<HiAcademicCap />}>Button 3</Menus.Button>
        </Menus.List>
      </Menus.Menu>
    </Menus>
  );
}

export default GeneralMenu;
