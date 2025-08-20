import "../styles/appointment.css";
import dayjs from "dayjs";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Popup from '../components/Popup.js';


function Appointment() {
	const today = dayjs();
	const todayPlus3Months = today.add(3, "month");
	const captchaRef = useRef(null);

	async function handleSubmit(e) {
		e.preventDefault();
		const token = captchaRef.current.getValue();
		captchaRef.current.reset();

		const { date, time, name, phone, message } = e.target.elements;
		const details = {
			date: date.value,
			time: time.value,
			name: name.value,
			phone: phone.value,
			message: message.value,
			token: token
		}

		const response = await fetch("https://drwatsondental.com/appointment", {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(details)
		});

		// const result = await response.json();
		// alert(result.status);
	}
    return (
        <div>
        <Popup />

        <section>
            <h1>Book Your Appointment</h1>
            {/* <p className="headline">Easily book an appointment by using the form below or just calling or messaging us</p> */}
            <p>
                Dear Patients and Friends, we would like to inform you that Dr Watson Dental Clinic is <strong>permanently closed</strong>. We DO NOT accept appointments and see patients. <br></br><br></br>

                From the bottom of our hearts we thank you for trusting us your health and smiles during all these years of daily work. <br></br><br></br>

                With love, Dr Watson Dental Clinic's team.<br></br><br></br>

                ❤️🇿🇲
            </p>
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
			<div className="form-container">
				<form className="appointment-form" onSubmit={handleSubmit}> 
					<label htmlFor="date">Choose date:</label>
					<input type="date" name="date" id="date" className="form-input" min={today.format("YYYY-MM-DD")} max={todayPlus3Months.format("YYYY-MM-DD")} defaultValue={today.format("YYYY-MM-DD")}/>
					<label htmlFor="time">Choose time (we are open from 08:00 to 17:00):</label>
					<select className="form-input" name="time" id="time">
						<option value="08:00">08:00</option>
						<option value="09:00">09:00</option>
						<option value="10:00">10:00</option>
						<option value="11:00">11:00</option>
						<option value="12:00">12:00</option>
						<option value="13:00">13:00</option>
						<option value="14:00">14:00</option>
						<option value="15:00">15:00</option>
						<option value="16:00">16:00</option>
					</select>
					<input type="text" name="name" id="name" placeholder="Name" className="form-input" pattern="[a-zA-Z]*" maxLength="30"/>
					<input type="tel" name="phone" id="phone" placeholder="Phone Number" className="form-input" minLength="6" maxLength="30" required/>
					<input type="text" name="message" id="message" placeholder="Message" className="form-input"/>
					<input type="checkbox" className="form-checkbox" required/>
					<label htmlFor="checkbox">I have read and agree to the Terms and Conditions and Privacy Policy</label>
					<ReCAPTCHA 
						sitekey = {process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY} 
						ref = {captchaRef}
					/>
					<button type="submit" className="button">Submit</button>
				</form>
			</div>
		</section>
        </div>
    );
}

export default Appointment;