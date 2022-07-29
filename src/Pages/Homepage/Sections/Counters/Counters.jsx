import React from "react";
import "./Counters.scss";
import CountUp from "react-countup";

export default function Counters() {
    return (
        <section id="counters">
            <div className="content">
                <div className="count">
                    <CountUp end={100} className="int" duration={2} enableScrollSpy />
                    <h1>Professional Teacher</h1>
                </div>

                <div className="count">
                    <CountUp end={13} className="int" duration={2} enableScrollSpy />
                    <h1>ACADEMIC DEPARTMENTS</h1>
                </div>

                <div className="count">
                    <CountUp end={23} className="int" duration={2} enableScrollSpy />
                    <h1>GRADUATE & UNDERGRADUATE PROGRAMS</h1>
                </div>

                <div className="count">
                    <CountUp end={100000} className="int" duration={2} enableScrollSpy />
                    <h1>REGISTERED STUDENTS</h1>
                </div>
            </div>
        </section>
    );
}
