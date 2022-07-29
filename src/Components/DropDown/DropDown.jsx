import React from "react";
import "./DropDown.scss";
import MenuItems from "../MenuItems/MenuItems";

export default function DropDown({ submenus, dropdown, depthLevel }) {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <MenuItems items={submenu} key={index} depthLevel={depthLevel}/>
            ))}
        </ul>
    );
}
