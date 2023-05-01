import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import validator from "validator";

const app = express();
const port = 8080;

app.use(express.static('build'));
app.use(cors());
app.use(express.json());


const contactEmail = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 587,
    auth: {
        user: emailUsername,
        pass: emailPassword
    }
 });

 contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to send");
    }
 });

app.post("/appointment", (req, res) => {
    const date = validator.stripLow(req.body.date);
    const time = validator.stripLow(req.body.time);
    const name = validator.stripLow(req.body.name) || "Unknown name";
    const phone = validator.stripLow(req.body.phone);
    const message = validator.stripLow(req.body.message);
    const email = {
        from: `"${name}" info@drwatsondental.com`,
        to: "info@drwatsondental.com",
        subject: "New Appointment",
        html: `
            <h1>This is a new appointment from our website.</h1>
            <p>Contact the patient to confirm the appointment or suggest another time.</p>
            <p>Date: ${date}.</p>
            <p>Time: ${time}.</p>
            <p>Name: ${name}.</p>
            <p>Phone: ${phone}.</p>
            <p>Message: ${message}.</p>
            <p><em>This is an automated message. Do not reply directly in the email.</em></p>
        `
    };
    contactEmail.sendMail(email, (error) => {
        if (error) {
            res.json({status: "ERROR WHEN SENDING MESSAGE"});
        } else {
            res.json({status: "Message sent"});
        }
    });
});

app.listen(port, () => console.log(`Listening to port ${port}`));

