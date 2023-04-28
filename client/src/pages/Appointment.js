import "../styles/appointment.css";

function Appointment() {
    return (
        <div>
        <section>
            <h1>Book Your Appointment</h1>
            <p class="headline">Easily book an appointment by using the form below or just calling or messaging us</p>
		<div id="phones-container">
			<div><p><a class="contactTextLink" href="tel:+260955336825"><img class="contactIcon" src={require("../images/phone.png")}/> +260 955 336825</a></p></div>
			<div><p><a class="contactTextLink" href="tel:+260950107838"><img class="contactIcon" src={require("../images/landline.png")}/> +260 950 107838</a></p></div>
		</div>
		<div id="social-icons-container">
			<a class="social" href="https://wa.me/260955336825"><img class="socialMedia" src={require("../images/whatsapp.png")}/></a>
				<a class="social" href="https://facebook.com/drwatsondental/"><img class="socialMedia" src={require("../images/facebook.png")}/></a>
				<a class="social" href="https://instagram.com/drwatsondental/"><img class="socialMedia" src={require("../images/instagram.png")}/></a>
		</div>
        </section>
		<section>
			<form method="post" action="email-form.php"> 
				<h3>Book Appointment Online</h3>
				<p class="headline form-headline">
					Please be advised that the chosen time might not be available. <br/>We will contact you to confirm.
				</p>
				<div class="form-inputContainer">
					<input type="date" name="date" id="date" class="form-input"/>
				</div>
				<div class="form-inputContainer" id="form-inputContainer-time" errorMessage = "Please choose time between 08:00 and 16:30">
					<input type="time" name="time" id="time" class="form-input" min="9:00" max="16:30"/>
				</div>
				<div class="form-inputContainer">
					<input type="text" name="name" id="name" placeholder="Name" class="form-input" pattern="[a-zA-Z]*" minlength="1" maxlength="30"/>
				</div>			
				<div class="form-inputContainer" errorMessage = "Please enter a valid phone number">
					<input type="tel" name="phone" id="phone" placeholder="Phone Number" class="form-input" pattern="[+]?[\d\s()-]*" minlength="6" maxlength="30" required/>
				</div>
				<div class="form-inputContainer" errorMessage="Please enter your message">
					<input type="text" name="message" id="message" placeholder="Message" class="form-input"/>
				</div>
				<div class="form-checkboxContainer">
					<input type="checkbox" class="form-checkbox" required/>
					<label for="checkbox">I have read and agree to the Terms and Conditions and Privacy Policy</label>
				</div>
				<button type="submit" class="button">Submit</button>
			</form>
		</section>
        </div>
    );
}

export default Appointment;