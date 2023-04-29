import "../styles/appointment.css";

function Appointment() {
    return (
        <div>
        <section>
            <h1>Book Your Appointment</h1>
            <p className="headline">Easily book an appointment by using the form below or just calling or messaging us</p>
		<div id="phones-container">
			<div><p><a className="contactTextLink" href="tel:+260955336825"><img className="contactIcon" src={require("../images/phone.png")}/> +260 955 336825</a></p></div>
			<div><p><a className="contactTextLink" href="tel:+260950107838"><img className="contactIcon" src={require("../images/landline.png")}/> +260 950 107838</a></p></div>
		</div>
		<div id="social-icons-container">
			<a className="social" href="https://wa.me/260955336825"><img className="socialMedia" src={require("../images/whatsapp.png")}/></a>
				<a className="social" href="https://facebook.com/drwatsondental/"><img className="socialMedia" src={require("../images/facebook.png")}/></a>
				<a className="social" href="https://instagram.com/drwatsondental/"><img className="socialMedia" src={require("../images/instagram.png")}/></a>
		</div>
        </section>
		<section>
			<h3>Book Appointment Online</h3>
			<p className="headline form-headline">
				Please be advised that the chosen time might not be available. <br/>We will contact you to confirm.
			</p>
			<form className="appointment-form" method="post" action="email-form.php"> 
				<div className="form-inputContainer">
					<input type="date" name="date" id="date" className="form-input"/>
				</div>
				<div className="form-inputContainer" id="form-inputContainer-time" errormessage = "Please choose time between 08:00 and 16:30">
					<input type="time" name="time" id="time" className="form-input" min="9:00" max="16:30"/>
				</div>
				<div className="form-inputContainer">
					<input type="text" name="name" id="name" placeholder="Name" className="form-input" pattern="[a-zA-Z]*" minLength="1" maxLength="30"/>
				</div>			
				<div className="form-inputContainer" errormessage = "Please enter a valid phone number">
					<input type="tel" name="phone" id="phone" placeholder="Phone Number" className="form-input" pattern="[+]?[\d\s()-]*" minLength="6" maxLength="30" required/>
				</div>
				<div className="form-inputContainer" errormessage="Please enter your message">
					<input type="text" name="message" id="message" placeholder="Message" className="form-input"/>
				</div>
				<div className="form-checkboxContainer">
					<input type="checkbox" className="form-checkbox" required/>
					<label htmlFor="checkbox">I have read and agree to the Terms and Conditions and Privacy Policy</label>
				</div>
				<button type="submit" className="button">Submit</button>
			</form>
		</section>
        </div>
    );
}

export default Appointment;