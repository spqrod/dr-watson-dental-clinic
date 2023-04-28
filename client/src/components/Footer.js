import "../styles/footer.css";
import phoneIcon from "../images/phone.png";
import landlineIcon from "../images/landline.png";
import mapIcon from "../images/map.png";
import clockIcon from "../images/clock.png";
import whatsAppIcon from "../images/whatsapp.png";
import facebookIcon from "../images/facebook.png";
import instagramIcon from "../images/instagram.png";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div id="footer">
                <div id="footer-contacts">
                    <h1>Contacts</h1>
                        <p><a class="footer-contactText" href="tel:+260955336825"><img class="contactIcon" src={phoneIcon}/> +260 955 336825</a></p>
                        <p><a class="footer-contactText" href="tel:+260950107838"><img class="contactIcon" src={landlineIcon}/> +260 950 107838</a></p>
                        <p><img class="contactIcon" src={mapIcon}/> Leopards Hill Mall, Leopards Hill Rd, Bauleni, Lusaka, Zambia</p>
                        <p><img class="contactIcon" src={clockIcon}/> Monday – Sunday<br/>8:00 – 17:00</p>
                        <a href="https://wa.me/260955336825/"><img class="socialMedia" src={whatsAppIcon}/></a>
                        <a href="https://facebook.com/drwatsondental/"><img class="socialMedia" src={facebookIcon}/></a>
                        <a href="https://instagram.com/drwatsondental/"><img class="socialMedia" src={instagramIcon}/></a>
                </div>
                <div id="footer-map">
                    {/* <iframe width="100%" height="100%" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJoWDZn3OPQBkRRH8xyLO8-S0&key=AIzaSyBgB0tY8-gE3cfSSUZ5st4z152lfElE7Yk"></iframe> */}
                </div>
            </div>
            <nav id="footerMenu">
                <ul>
                    <li><a class="footerMenu-link" href="https://drwatsondental.com/">Home</a></li>
                    <li><a class="footerMenu-link" href="https://drwatsondental.com/appointment">Appointment</a></li>
                    <li><a class="footerMenu-link" href="https://drwatsondental.com/services">Services</a></li>
                    <li><a class="footerMenu-link" href="https://drwatsondental.com/contact">Contact</a></li>
                    <li><a class="footerMenu-link" href="https://drwatsondental.com/about">About</a></li>
                    <li><a class="footerMenu-link" href="https://drwatsondental.com/blog">Blog</a></li>
                    <li><a class="footerMenu-link" href="https://drwatsondental.com/privacy">Privacy Policy</a></li>
                    <li><a class="footerMenu-link" href="https://drwatsondental.com/terms">Terms and Conditions</a></li>
                </ul>
            </nav>
        <p>
            Copyright © {currentYear} Dr Watson Dental Clinic
        </p>
    </footer>
    );
}

export default Footer;