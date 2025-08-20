import "../styles/services.css";
import { Link } from "react-router-dom";
import Popup from '../components/Popup.js';


function Services() {
    return (
        <div>
            <Popup />

            <section id="services-hero-section">
                <div id="services-hero-text">
                    <h1>Everything you expect from a dentist.<br/>
                        And some more.<br/></h1>
                    <p className="headline">See the list of our services below</p>
                        <div className="button">
                            <Link to="/appointment">Book Appointment</Link>
                        </div>
                        <p>Or call <a href="tel:+260955336825">+260 955 336825</a></p>
                </div>
            </section>
            <section id="services-section"> 
                <h1>Dental Services</h1>
                <div>
                    <h3>Full Dental Examination And Treatment Planning</h3>
                    <div className="service-description-and-animation">
                        <p className="service-description">It’s the foundation of any dental planning. 
                            It should be done before any treatment. 
                            We will carefully examine your soft tissues in the mouth, gums, 
                            hard tissues of the teeth and perform an extra oral exam.</p>
                        <div className="service-animation" id="animation-container-1"></div>
                    </div>
                </div>
                <div>
                    <h3>Preventive Dental Care</h3>
                    <div className="service-description-and-animation">
                        <p className="service-description">An ounce of prevention is worth a pound of cure.
                            Preventive Dental Care is aimed at identifying and stopping early dental issues before they become a bigger problem. 
                            It usually consists of regular oral exams, teeth cleaning and routine X-rays.</p>
                        <div className="service-animation" id="animation-container-2"></div>
                    </div>
                </div>
                <div>
                    <h3>Scaling And Polishing</h3>
                    <div className="service-description-and-animation">
                        <p className="service-description">Over time more acidic environment in your mouth may lead to stains and damage to the enamel.
                            With scaling we remove the calculus deposits (stains) from the teeth.
                            And then we use polishing for smoothing the teeth as scaling can make the teeth feel rough.</p>
                        <div className="service-animation" id="animation-container-3"></div>
                    </div>
                </div>
                <div>
                    <h3>Fillings And Restorations</h3>
                    <div className="service-description-and-animation">
                        <p className="service-description">Tooth decay may damage your tooth. 
                            In this case we can use a tooth coloured material to fill the cavity. This will return its form and function.
                            Regular checkups and proper oral care can often reduce the need for teeth restoration.</p>
                        <div className="service-animation" id="animation-container-4"></div>
                    </div>
                </div>
                <div>
                    <h3>Dental Extractions</h3>
                    <div className="service-description-and-animation">
                        <p className="service-description">When the tooth is decayed or damaged beyond repair, 
                            or in the case of an overcrowded mouth we need to perform a dental extraction. 
                            It is what it sounds like. First, we use a local anesthetic to numb the area. 
                            Then we use forceps to grasp the tooth, loosen it from the jaw bone and pull.</p>
                        <div className="service-animation" id="animation-container-5"></div>
                    </div>
                </div>
                <div>
                    <h3>Wisdom Tooth Removal</h3>
                    <div className="service-description-and-animation">
                        <p className="service-description">Sometimes the wisdom tooth is growing incorrectly and should be removed. 
                            To do that, we may open up the gum tissue in the area, 
                            remove any bone that’s obstructing the wisdom tooth and perform the extraction.</p>
                        <div className="service-animation" id="animation-container-6"></div>
                    </div>
                </div>
                <div>
                    <h3>Crowns, Bridges and Dentures</h3>
                    <div className="service-description-and-animation">
                        <p className="service-description">
                            Crowns entirely cover a damaged tooth. It strengthens the tooth, protects it and improves its look and shape. 
                            It’s cemented firmly and can only be removed by a dentist.
                            Bridges are needed to replace one or more missing teeth. They are cemented to the natural teeth and cover the empty space.
                            Dentures are a removable replacement for missing teeth and tissues. Some of them complete and some partial.</p>
                        <div className="service-animation" id="animation-container-7"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;