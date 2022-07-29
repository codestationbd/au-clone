import React from "react";
import "./Navigation.scss";
import data from "Assets/Data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import MenuItems from "Components/MenuItems/MenuItems";

export default function Navigation() {
    const navLink = data.navTree;
    const depthLevel = 0;

    return (
        <nav>
            <img src={require("Assets/Image/logo.png")} alt="site-logo" />
            <ul>
                {navLink.map((menu, index) => {
                    return (
                        <MenuItems items={menu} key={index} depthLevel={depthLevel} />
                    );
                })}
            </ul>
            <FontAwesomeIcon
                icon={faSearch}
                className="custom-icon"
            ></FontAwesomeIcon>
        </nav>
    );
}
