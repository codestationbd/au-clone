import React from 'react';
import "./Watch.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function section () {
    return <section id='watch'>
        <h1>Watch Campus Life Video Tour</h1>
        <FontAwesomeIcon className='play' icon={faPlay} />
        <div className='overlay'></div>
        <img src={require("Assets/Image/hero3.jpg")} alt=""/>
    </section>
}
