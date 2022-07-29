import React from "react";
import "./Hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
    const [index, setIndex] = React.useState(1)

    function goLeft() {
        let idx = index
        idx = idx - 1
        if (idx === 0) idx = 3
        setIndex(idx)
    }

    function goRight() {
        let idx = index
        idx = idx + 1
        if (idx === 4) idx = 1
        setIndex(idx)
    }

    return (
        <section id="hero">
            <img className="carousel-image" src={require(`Assets/Image/hero${index}.jpg`)} />
            <FontAwesomeIcon className="right-arrow" icon={faChevronRight} onClick={goRight}/>
            <FontAwesomeIcon className="left-arrow" icon={faChevronLeft} onClick={goLeft}/>
        </section>
    );
}

// topnav
// nav
// hero
// welcome
// programs offered
