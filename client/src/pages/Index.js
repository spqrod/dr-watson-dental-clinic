import "../styles/index.css";
import smilingWoman from "../images/smiling-woman-2.png";
import star from "../images/star.svg";
import ggl from "../images/ggl.svg";
import photoEK from "../images/photo-ek.png";
import photoNM from "../images/photo-nm.png";
import photoPM from "../images/photo-pm.png";
import photoCP from "../images/photo-cp.png";
import photoCL from "../images/photo-cl.png";
import photoDZ from "../images/photo-dz.png";

function Index() {
    return (
        <div>
            <section id="heroSection">
                <div id="heroSection-info">
                    <h1>Peace begins with a smile</h1>
                    <p id="heroSection-quote">- Mother Teresa</p>
                    <p>Dr Watson Dental Clinic is a trusted family dentist in Lusaka 🇿🇲.
                        We are open 7 days a week from 8:00 to 17:00 at Leopards Hill Mall.</p>
                    <div class="button">
                        <a href="https://drwatsondental/appointment">Book Appointment</a>
                    </div>
                    <p>Or call <a href="tel:+260955336825">+260 955 336825</a></p>
                </div>
                <div id="heroSection-imageContainer">
                    <img id="heroSection-image" src={smilingWoman} />
                </div>
            </section>
            <section>
                <h1>What People Say</h1>
                <p class="headline">Real reviews from Google</p>
                <div id="reviewsContainer">
                    <div class="review">
                        <div class="review-body">
                            <ul>
                                <li><img class="review-body-star" src={star} /></li>
                                <li><img class="review-body-star" src={star} /></li>
                                <li><img class="review-body-star" src={star} /></li>
                                <li><img class="review-body-star" src={star} /></li>
                                <li><img class="review-body-star" src={star} /></li>
                            </ul> 
                            <img class="review-body-googleIcon" src={ggl} />
                            <p>The treatment and hospitality is top notch, I highly recommend. The staff are so kind and the processes are very fast,you don't have to worry about being at the clinic too long or being in long queues. You are in good hands at Dr Watson Dental Clinic.</p>
                        </div>
                        <div class="review-triangle"></div>
                        <img class="review-photo" src={photoNM}/>
                        <p class="review-name">Nchimunya Moonga</p>
                    </div>
                    <div class="review">
                        <div class="review-body">
                            <ul>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                            </ul> 
                            <img class="review-body-googleIcon" src={ggl}/>
                            <p>Staff Professional. Customer Service excellent. Place: Clean Equipment:Morden</p>
                        </div>
                        <div class="review-triangle"></div>
                        <img class="review-photo" src={photoPM}/>
                        <p class="review-name">Patrick Mutale</p>
                    </div>
                    <div class="review">
                        <div class="review-body">
                            <ul>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                            </ul> 
                            <img class="review-body-googleIcon" src={ggl}/>
                            <p>Friendly staff who are good at what they do,definitely recommend it to others too... Keep up.</p>
                        </div>
                        <div class="review-triangle"></div>
                        <img class="review-photo" src={photoCP}/>
                        <p class="review-name">Cedric Mwepya</p>
                    </div>
                    <div class="review">
                        <div class="review-body">
                            <ul>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                            </ul> 
                            <img class="review-body-googleIcon" src={ggl}/>
                            <p>Dr WATSON dental clinic has the best services and a good team of dentist that care for there patients, very welcoming. I have had a good experience thank you so much Dr WATSON for your services🙏🙏👍.</p>
                        </div>
                        <div class="review-triangle"></div>
                        <img class="review-photo" src={photoCL}/>
                        <p class="review-name">Caleb lengwe</p>
                    </div>
                    <div class="review">
                        <div class="review-body">
                            <ul>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                            </ul> 
                            <img class="review-body-googleIcon" src={ggl}/>
                            <p>Comfortable clinic. Friendly staff and most importantly, good professions! Did a teeth cleaning and checkup. I was very satisfied with the result!</p>
                        </div>
                        <div class="review-triangle"></div>
                        <img class="review-photo" src={photoDZ}/>
                        <p class="review-name">Darya Z.</p>
                    </div>
                    <div class="review">
                        <div class="review-body">
                            <ul>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                                <li><img class="review-body-star" src={star}/></li>
                            </ul> 
                            <img class="review-body-googleIcon" src={ggl}/>
                            <p>Excellent customer care service. The place is clean and very welcoming.</p>
                        </div>
                        <div class="review-triangle"></div>
                        <img class="review-photo" src={photoEK}/>
                        <p class="review-name">emelia Kalala</p>
                    </div>
                </div>	
            </section>
            <section>
                <h1>Insurances</h1>
                <p>You are very welcome to use your dental benefits from 
                    NHIMA, SES, Liberty and Medlink medical insurances.</p>
                <div id="insurancesContainer">
                    <img class="insurance-logo" src={require("../images/nhima.jpeg")} alt="NHIMA logo"/>
                    <img class="insurance-logo" src={require("../images/ses.jpg")} alt="SES logo"/>
                    <img class="insurance-logo" src={require("../images/medlink.jpg")} alt="MedLink logo"/>
                    <img class="insurance-logo" src={require("../images/liberty.jpeg")} alt="Liberty logo"/>
                </div>
            </section>
            <section>
                <h1>Dental Services</h1>
                <p class="headline">Here's how we can help you</p>
                <div>
                    <div>
                        <h3>Scaling and Polishing</h3>
                        <p>This is deep dental cleaning. If done every 6 months will help prevent many dental diseases.</p>
                    </div>
                    <div>
                        <h3>Fillings</h3>
                        <p>We use a tooth coloured material to fill the cavity of a damaged tooth. This will return its form and function.</p>
                    </div>
                    <div>
                        <h3>Extractions</h3>
                        <p>When the tooth is decayed or damaged beyond repair, or in the case of an overcrowded mouth we perform a dental extraction. </p>
                    </div>
                    <div>
                        <h3>Crowns</h3>
                        <p>Crowns entirely cover a damaged tooth. It strengthens the tooth, protects it and improves its look and shape. </p>
                    </div>
                    <div>
                        <h3>Bridges</h3>
                        <p>Bridges are needed to replace one or more missing teeth. They are cemented to the natural teeth and cover the empty space.</p>
                    </div>
                    <div>
                        <h3>Dentures</h3>
                        <p>Dentures are a removable replacement for missing teeth and tissues. </p>
                    </div>
                    <div>
                        <h3>Teeth Whitening</h3>
                        <p>Who doesn’t want that bright and impressive smile? 😀</p>
                    </div>
                </div>
                <div class="button" id="dentalServices-button">
                    <a href="https://drwatsondental.com/services">See All Services</a>
                </div>
            </section>
            <section>
                <h1>You Are In Safe Hands</h1>
                <div id="safeHands">
                    <div>
                        <p>Your healthy and beautiful smile is our top priority.</p>
                        <p>We stand by our values and work and recommend only what’s medically needed. </p>
                        <p>You can be certain that we have your best interests at heart ❤️</p>
                        <div class="button">
                            <a href="https://drwatsondental.com/appointment">Book Your Appointment</a>
                        </div>
                    </div>
                    <div>
                        <img class="global-image-preset" id="safeHands-image" src={require("../images/dentists-at-work.jpg")}/>
                    </div>
                </div>
            </section>
            <a id="floatingWhatsappButton" href="https://wa.me/260955336825">
                <img id="floatingWhatsappButton-image" src={require("../images/whatsapp.png")}/>
            </a>
        </div>

    );
}

export default Index;