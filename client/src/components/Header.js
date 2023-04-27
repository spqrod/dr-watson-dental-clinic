import "../styles/header.css";
import logo from "../images/logo.jpg";
import whatsAppIcon from "../images/whatsapp.png";

function Header() {
    return (
        <header>
            <a href="https://drwatsondental.com">
                <img id="logo" src={logo} alt="dr-watson-dental-clinic-logo" />
            </a>
            <input type="checkbox" id="hamburger-checkbox" />

            <label id="hamburger" for="hamburger-checkbox">
                <span class="hamburgerLine" id="hamburgerLine-1"></span>
                <span class="hamburgerLine" id="hamburgerLine-2"></span>
                <span class="hamburgerLine" id="hamburgerLine-3"></span>
            </label>

            <nav id="headerMenu">
                <ul>
                    <li><a class="headerMenu-link" href="https://drwatsondental.com/about">About</a></li>
                    <li><a class="headerMenu-link" href="https://drwatsondental.com/contact">Contact</a></li>
                    <li><a class="headerMenu-link" href="https://drwatsondental.com/appointment">Appointment</a></li>
                    <li><a class="headerMenu-link" href="https://drwatsondental.com/services">Services</a></li>
                    <li><a class="headerMenu-link" href="https://drwatsondental.com/blog">Blog</a></li>
                    <li class="headerMenu-phoneAndWhatsapp"><a href="tel:+260955336825">Call +260 955 336825</a></li>
                    <li class="headerMenu-phoneAndWhatsapp"><a class="social" href="https://wa.me/260955336825">
                        <img class="socialMedia" src={whatsAppIcon} />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;