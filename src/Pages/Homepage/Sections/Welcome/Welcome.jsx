import React from "react";
import "./Welcome.scss";

export default function Welcome() {
    return <div className="container">
        <h3 className="about">Welcome</h3>
        <h1 class="about-title">Asian University of Bangladesh</h1>
        <div className="flex">
            <div className="left">
                <img height="215px" src={require("Assets/Image/founder.jpg")} alt="founder" />
            </div>
            <div className="right">
                <h3>
                   MESSAGE FROM THE HONOURABLE FOUNDER & FOUNDER VICE CHANCELLOR
                </h3>
                <h5>
                   Professor Abulhasan M. Sadeq, Ph.D.
                </h5>
                <p>
                   It gives me great pleasure to welcome you to Asian University of Bangladesh, a place of learning and scholarship, engaged in preparing young men and women to face the challenges of the new millennium.<br></br> In its efforts towards progress and development, Bangladesh needs high quality human resources, professionally sound and morally upright, equipped with the latest knowledge in multi-disciplinary fields and with technological ability. AUB commits to deliver this to the nation.
                </p>
                <span class="read-more">
                    Read More
                </span>
            </div>
        </div>
        <div className="vc">
            <div className="vc_left">
                <img src={require("Assets/Image/vc.jpg")} alt="vc" />
            </div>
            <div className="vc_right">
                <h3>
                   MESSAGE FROM THE HONOURABLE FOUNDER & FOUNDER VICE CHANCELLOR
                </h3>
                <p>
                Professor Dr Shahjahan Khan is the Vice Chancellor and Chief Executive Officer of the Asian University of Bangladesh. <br></br>
                Professor Shahjahan Khan obtained his PhD and MSc degrees in Mathematical Statistics from the University of Western Ontario (UWO), Canada; and BSc (Hon) and MSc in Statistics from Jahangirnagar University, Bangladesh. 
                He started his academic career as a Lecturer at Dhaka University, Bangladesh in 1980, and was awarded Commonwealth Scholarship in the UK.<br></br>
                <br></br>
                He joined the University of Southern Queensland (USQ), Australia in 1993 as a Lecturer of Statistics. He served as the founding Professor of Statistics at USQ. In addition to teaching at UWO, Canada he has taught at University of Dhaka, Bangladesh; King Fahd University of Petroleum and Minerals, Saudi Arabia; Sultan Qaboos University, Oman; and University of Bahrain, Bahrain. At USQ, he has served as the Statistics Discipline leader, member on the Academic Senate/Board and Chair of Multicultural Staff Network.
                </p>
                <span class="read-more">
                    Read More
                </span>
            </div>
        </div>

        <div className="poster">
            <img src={require('Assets/Image/covid.jpeg')} alt="covid" />
            <img src={require('Assets/Image/aub.jpg')} alt="aub" />
        </div>
    </div>;
}
