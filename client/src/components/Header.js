import "../styles/header.css";
import logo from "../images/logo.jpg";
import whatsAppIcon from "../images/whatsapp.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/">
                <img id="logo" src={logo} alt="dr-watson-dental-clinic-logo" />
            </Link>
            <input type="checkbox" id="hamburger-checkbox" />
            <label id="hamburger" for="hamburger-checkbox">
                <span class="hamburgerLine" id="hamburgerLine-1"></span>
                <span class="hamburgerLine" id="hamburgerLine-2"></span>
                <span class="hamburgerLine" id="hamburgerLine-3"></span>
            </label>
            <nav id="headerMenu">
                <ul>
                    <li>
                        <Link class="headerMenu-link" to="/appointment">Appointment</Link>
                    </li>
                    <li>
                        <Link class="headerMenu-link" to="/services">Services</Link>
                    </li>
                    <li>
                        <Link class="headerMenu-link" to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link class="headerMenu-link" to="/about">About</Link>
                    </li>
                    <li>
                        <Link class="headerMenu-link" to="/blog">Blog</Link>
                    </li>
                    <li class="headerMenu-phoneAndWhatsapp">
                        <Link to="tel:+260955336825">Call +260 955 336825</Link>
                    </li>
                    <li class="headerMenu-phoneAndWhatsapp">
                        <Link class="social" to="https://wa.me/260955336825">
                            <img class="socialMedia" src={whatsAppIcon} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;