import "../styles/contact.css";

function Contact() {

    async function handleSubmit(e) {
        e.preventDefault();
        const { name, phone, email, message } = e.target.elements;

        const messageDetails = {
            name: name.value,
            phone: phone.value,
            email: email.value,
            message: message.value
        };

        const response = await fetch("https://drwatsondental.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(messageDetails),
        });
        
        const result = await response.json();
        alert(result.status);
    };

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
                <h2>Send us an email</h2>
                <div className="form-container">
                    <form onSubmit={handleSubmit}> 
                        <input type="text" name="name" id="name" placeholder="Name" className="form-input" pattern="[a-zA-Z]*" maxLength="40"/>			
                        <input type="email" name="email" id="email" placeholder="Email" className="form-input" pattern="[\w\.\-]+@[a-zA-Z\d\-]+\.[a-zA-Z]{2,10}\.?[a-zA-Z]{0,10}" maxLength="50"/>
                        <input type="tel" name="phone" id="phone" placeholder="Phone Number" className="form-input" pattern="[+]?[\d\s()-]*" minLength="6" maxLength="30"/>
                        <input type="text" name="message" id="message" placeholder="Message" className="form-input" required/>
                        <input type="checkbox" className="form-checkbox" required/>
                        <label htmlFor="checkbox">I have read and agree to the Terms and Conditions and Privacy Policy</label>
                        <button type="submit" className="button">Submit</button>
                    </form>
                </div>
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