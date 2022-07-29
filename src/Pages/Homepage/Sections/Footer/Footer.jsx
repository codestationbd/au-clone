import React from "react"
import "./Footer.scss"
import logoFooter from 'Assets/Image/logo-footer.png'

export default function Footer() {
    return (
        <section id="footer">
            <div className="footer--row">
                <div className="footer--col footer--col--1">
                    <img src={logoFooter} alt="" />
                    <div class="footer--icons">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-pinterest"></i>
                        <i class="fa-brands fa-google-plus-g"></i>
                     </div>
                </div>

                <div className="footer--col footer--col--2">
                    <h3>Feature Links</h3>
                    <ul>
                        <li><a href="#">Admissions</a></li>
                        <li><a href="#">Administration</a></li>
                        <li><a href="#">Schools and Depertments</a></li>
                        <li><a href="#">Programs</a></li>
                        <li><a href="#">Completed & Verified Students</a></li>
                    </ul>
                </div>

                <div className="footer--col footer--col--3">
                    <h3>Information</h3>
                    <div className="footer--info">
                        <i class="fa-solid fa-house-chimney"></i>
                        <p>Bangabandhu Road, Tongabari Ashulia, Dhaka</p>
                    </div>
                    <div className="footer--info">
                        <i class="fa-solid fa-phone"></i>
                        <p>01678 66 44 17-19</p>
                    </div>
                    <div className="footer--info">
                        <i class="fa-regular fa-envelope"></i>
                        <p>info@aub.edu.bd</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom"></div>
        </section>
        )
}