import React from "react";
import Dropdown from "../DropDown/DropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function MenuItems({ items, depthLevel }) {
    const [dropdown, setDropdown] = React.useState(false);
    const onMouseEnter = ()=> {
        setDropdown(true)
    }

    const onMouseLeave = () => {
        setDropdown(false)
    }
    return (
        <li 
            className="menu-items"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {items.submenu ? (
                <>
                    <button 
                        type="button" 
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={()=> setDropdown(prev => !prev)}
                    >
                        {items.title}{" "}
                        {depthLevel > 0 && <FontAwesomeIcon icon={faChevronRight} />}
                    </button>
                    <Dropdown 
                        submenus={items.submenu} 
                        dropdown={dropdown}
                        depthLevel={depthLevel}
                    />
                </>
            ) : (
                <button>{items.title}</button>
            )}
        </li>
    );
}
