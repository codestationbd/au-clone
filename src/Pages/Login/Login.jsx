import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faHome } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
    let navigate = useNavigate()
    return (
        <section id="login--page">
            <div className="login--col-left">
                <div className="auth--left">
                    <img src={require("Assets/Image/logo-footer.png")} alt="" />
                    <h1>Asian University of Bangladesh</h1>

                    <div className="auth--logo">
                        <img
                            src={require("Assets/Image/logo-footer.png")}
                            alt=""
                        />
                        <h1>My Asian</h1>
                    </div>
                </div>
            </div>

            <div className="login--col-right">
                <div className="auth--right">
                    <h1>Log in</h1>
                    <input placeholder="Student ID"></input>
                    <input placeholder="Password"></input>
                    <button>My Asian</button>
                    <div className="row">
                        <FontAwesomeIcon icon={faLock}/>
                        <p>Forgot Password?</p>
                    </div>

                    <div className="design">
                        <p>Designed & Developed by:</p>
                        <img style={{ height: "20px" }} src={require("Assets/Image/designer.png")} alt="" />
                        <h1>SoftRithm IT Limited</h1>
                    </div>

                    <FontAwesomeIcon icon={faHome} className="home--icon" onClick={()=>navigate("/")}/>
                </div>
            </div>
        </section>
    );
}
