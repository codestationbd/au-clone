import React from "react";
import "./ProgramsOffered.scss";

export default function ProgramsOffered() {
    return (
        <section id="prog">
            <div className="prog--body">
                <h1 className="prog--header">Programs Offered</h1>
                <div className="prog--row">
                    <div className="prog--col">
                        <h2>Undergraduate</h2>
                        <div className="line"></div>
                        <ul>
                            <li>
                                <a href="#">
                                    Bachelor of Business Administration (BBA)
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    B.Sc.(Engg.) in Computer Science and
                                    Engineering (CSE)
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    B.S.S.(Hons.) in Government and Politics
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    B.S.S. (Hons.) in Sociology and Anthropology
                                </a>
                            </li>
                            <li>
                                <a href="#">B.S.S.(Hons.) in Economics</a>
                            </li>
                            <li>
                                <a href="#">B.A. (Hons.) in English</a>
                            </li>
                            <li>
                                <a href="#">B.A. (Hons.) in Bengali</a>
                            </li>
                            <li>
                                <a href="#">B.A. (Hons.) in Islamic Studies</a>
                            </li>
                            <li>
                                <a href="#">
                                    B.A. (Hons.) in Islamic History and
                                    Civilization
                                </a>
                            </li>
                            <li>
                                <a href="#">Bachelor of Education (B.Ed.)</a>
                            </li>
                            <li>
                                <a href="#">B.S.S. (Hons) in Social Work</a>
                            </li>
                        </ul>
                    </div>
                    <div className="prog--col">
                        <h2>Postgraduate</h2>
                        <div className="line"></div>
                        <ul>
                            <li>
                                <a href="#">
                                    Master of Business Administration
                                </a>
                            </li>
                            <li>
                                <a href="#">M.A. in Bengali</a>
                            </li>
                            <li>
                                <a href="#">M.A. in English</a>
                            </li>
                            <li>
                                <a href="#">
                                    M.A. in Islamic History and Civilization
                                </a>
                            </li>
                            <li>
                                <a href="#">M.A. in Islamic Studies</a>
                            </li>
                            <li>
                                <a href="#">M.S.S. in Economics</a>
                            </li>
                            <li>
                                <a href="#">
                                    M.S.S. in Government and Politics
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    M.S.S. in Sociology and Anthropology
                                </a>
                            </li>
                            <li>
                                <a href="#">M.S.S. in Social Work</a>
                            </li>
                            <li>
                                <a href="#">
                                    M.S.S. in Information Science and Library
                                    Management
                                </a>
                            </li>
                            <li>
                                <a href="#">Master of Education (M.Ed.)</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
