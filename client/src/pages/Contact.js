import "../styles/contact.css";

function Contact() {
    return (
        <div>
            <section>
                <h1>Contact Us</h1>
                <div id="phones-container">
                    <div><p><a className="contactTextLink" href="tel:+260955336825"><img className="contactIcon" src={require("../images/phone.png")} /> +260 955 336825</a></p></div>
                    <div><p><a className="contactTextLink" href="tel:+260950107838"><img className="contactIcon" src={require("../images/landline.png")}/> +260 950 107838</a></p></div>
                </div>
                <div id="social-icons-container">
                    <a className="social" href="https://wa.me/260955336825"><img className="socialMedia" src={require("../images/whatsapp.png")}/></a>
                        <a className="social" href="https://facebook.com/drwatsondental/"><img className="socialMedia" src={require("../images/facebook.png")}/></a>
                        <a className="social" href="https://instagram.com/drwatsondental/"><img className="socialMedia" src={require("../images/instagram.png")}/></a>
                </div>
            </section>
            <section>
                <form method="post" action="email-form.php"> 
                    <h3>Send us an email</h3>
                    <div className="form-inputContainer">
                        <input type="text" name="name" id="name" placeholder="Name" className="form-input" pattern="[a-zA-Z]*" minLength="1" maxLength="30"/>
                    </div>			
                    <div className="form-inputContainer" errormessage="Please enter a valid email">
                        <input type="email" name="email" id="email" placeholder="Email" className="form-input" pattern="[\w\.\-]+@[a-zA-Z\d\-]+\.[a-zA-Z]{2,10}\.?[a-zA-Z]{0,10}" maxLength="50"/>
                    </div>
                    <div className="form-inputContainer" errormessage = "Please enter a valid phone number">
                        <input type="tel" name="phone" id="phone" placeholder="Phone Number" className="form-input" pattern="[+]?[\d\s()-]*" minLength="6" maxLength="30"/>
                    </div>
                    <div className="form-inputContainer" errormessage="Please enter your message">
                        <input type="text" name="message" id="message" placeholder="Message" className="form-input" required/>
                    </div>
                    <div className="form-checkboxContainer">
                        <input type="checkbox" className="form-checkbox" required/>
                        <label htmlFor="checkbox">I have read and agree to the Terms and Conditions and Privacy Policy</label>
                    </div>
                    <button type="submit" className="button">Submit</button>
                </form>
            </section>
            <section>
                <h3>Visit us</h3>
                <p>Leopards Hill Mall, Leopards Hill Rd, Bauleni, Lusaka, Zambia.</p>
                <h3>Working hours</h3>
                <p>7 days a week. 08:00 – 17:00.</p>
            </section>
        </div>
    );
}

export default Contact;