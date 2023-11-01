import React from "react";
import "./Footer.scss";
import {FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa"
import payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                voluptatem accusantium doloremque laudantium, totam rem 
                aperism, eaque ipsa quae ab illo invebtore veritatis et 
                quasi architecto beatae vitae dicta sunt explicabo eaque
                 ipsa quae ab illo
                 </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                        suman chauk, chattarpur, South Delhi,
                        New Delhi 110074
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">phone: 09472787189</div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email: ravikr62960@gmail.com</div>
                    </div>
                </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theaters</span>
                <span className="text">Projectors</span>
                </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditio</span>
                <span className="text">Contact Us</span>
                </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    JSDEVSTORE 2023 CREATED BY JS DEV. PREMIUM E-COMMERCE 
                    SOLUTIONS
                </div>
                <img src={payment} />
            </div>
        </div>
    </footer>;
};

export default Footer;
