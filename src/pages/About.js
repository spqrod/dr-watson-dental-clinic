import "../styles/about.css";
import { Link } from "react-router-dom";
import Popup from '../components/Popup.js';


function About() {
    return (
        <div>
            <Popup />

            <section>
                <h1>About Dr Watson Dental Clinic</h1>
                <p>We are passionate to heal. That’s our motto and our life.<br/><br/>
                    Most jobs are simple: you give people money, people give you a service in return.<br/><br/>
                    Medicine is different. In Medicine people come to you with real physical pain. And you get to treat it. 
                    You heal people and make them feel good again. You help them on a very deep level.
                    It’s different. It’s something no money can buy.<br/><br/>
                    That’s why we are passionate to heal. It’s the reason we show up at our Dental Clinic in Leopards Hill Mall 7 days a week.<br/>
                </p>
            </section>
            <section>
                <h1>Meet the Team</h1>
                <div id="team-members-container">
                    <div className="team-member">
                        <img src={require("../images/dr-watson-with-patient.jpg")} alt="Dr Watson with a patient"/>
                        <h3>Dr Nataliya Watson</h3>
                        <p className="team-member-position">Dental Surgeon</p>
                        <p>Dr Nataliya Watson is a dental surgeon with more than 25 years of experience.
                            She graduated from Medical University in the USSR.
                            In her free time, Nataliya loves to meditate, eat avocados and water her plants.</p>
                    </div>
                    <div className="team-member">
                        <img src={require("../images/memory.jpg")} alt="Memory"/>
                        <h3>Ms Memory Lufwendo</h3>
                        <p className="team-member-position">Assistant</p>
                        <p>Memory has years of experience in assisting our doctors during dental treatment.
                            Memory is a very social person. She loves reading, listening to music and singing.</p>
                    </div>
                </div>
            </section>
            <section>
                <h1>We're Hiring!</h1>
                <p>World-class dental equipment is good. Quality dental training is even better. But without people who are passionate to heal, it means nothing.<br/><br/>
                    We are always on the lookout for the best dental talents of Zambia.<br/><br/>
                    If you want to work with Dr Watson Dental, please <Link to="/contact">drop us a line</Link>.</p>
            </section>
        </div>
    );
}

export default About;