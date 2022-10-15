// URL Prefix. Added in resourse URLs (like images)
// for pages other than index.html. 
// Because those are located in a separate folder, so
// relative paths to resourses are different


// 	------------------------------
// 	Header
// 	------------------------------

class header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {

        // This is used to automatically insert the right URL prefix depending on the relative resourse position. 
        // E. g. index.html was located in the root folder ./ , but other pages were in the pages folder ./pages.
        // This required dynamic prefixing. 
        // All of the pages were moved in the root, so no need in the prefixes.

        let urlPrefix = "./";

        const htmlFileName = 
            window.location.pathname.slice(1);

        if (htmlFileName.includes("blog")) urlPrefix = "../"

        // if (htmlFileName == "index.html") 
        //     urlPrefix = "./"; else 
        //     urlPrefix = "../";


        this.innerHTML = 
        `
        <header>

        <!-- Header Logo -->

        <a href="https://drwatsondental.com">
            <img id="logo" src="${urlPrefix}graphics/logo.jpg" alt="dr-watson-dental-clinic-logo"></a>

        <!-- Header hamburger icon -->

        <input type="checkbox" id="hamburger-checkbox">
        
        <label id="hamburger" for="hamburger-checkbox">
            <span class="hamburgerLine" id="hamburgerLine-1"></span>
            <span class="hamburgerLine" id="hamburgerLine-2"></span>
            <span class="hamburgerLine" id="hamburgerLine-3"></span>
        </label>

        <!-- Header menu links -->

        <nav id="headerMenu">

            <ul>

                <li><a class="headerMenu-link" href="https://drwatsondental.com/about">About</a></li>

                <li><a class="headerMenu-link" href="https://drwatsondental.com/contact">Contact</a></li>

                <li><a class="headerMenu-link" href="https://drwatsondental.com/appointment">Appointment</a></li>

                <li><a class="headerMenu-link" href="https://drwatsondental.com/services">Services</a></li>

                <li><a class="headerMenu-link" href="https://drwatsondental.com/blog">Blog</a></li>

                <li class="headerMenu-phoneAndWhatsapp"><a href="tel:+260955336825">Call +260 955 336825</a></li>

                <li class="headerMenu-phoneAndWhatsapp"><a class="social" href="https://wa.me/260955336825">
                    <img class="socialMedia" src="${urlPrefix}graphics/whatsapp.png"></a></li>
        
            </ul>
        
        </nav>
            
        </header>
        `;
    }
}

customElements.define("header-component", header);

// 	------------------------------
// 	Footer
// 	------------------------------

// 	Footer copyright text with auto year update. 
//  Embedded in <p> at the bottom of the footer

const currentYear = new Date().getFullYear();

class footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {

        // This is used to automatically insert the right URL prefix depending on the relative resourse position. 
        // E. g. index.html was located in the root folder ./ , but other pages were in the pages folder ./pages.
        // This required dynamic prefixing. 
        // All of the pages were moved in the root, so no need in the prefixes.

        let urlPrefix = "./";

        const htmlFileName = 
            window.location.pathname.slice(1);

        if (htmlFileName.includes("blog")) urlPrefix = "../"

        // if (htmlFileName == "index.html")
        //     urlPrefix = "./"; else
        //     urlPrefix = "../";

        this.innerHTML = `
        <footer>

        <div id="footer">

            <div id="footer-contacts">

                <h1>Contacts</h1>

                    <p><a class="footer-contactText" href="tel:+260955336825"><img class="contactIcon" src="${urlPrefix}graphics/phone.png"> +260 955 336825</a></p>

                    <p><a class="footer-contactText" href="tel:+260950107838"><img class="contactIcon" src="${urlPrefix}graphics/landline.png"> +260 950 107838</a></p>

                    <p><img class="contactIcon" src="${urlPrefix}graphics/map.png"> Leopards Hill Mall, Leopards Hill Rd, Bauleni, Lusaka, Zambia</p>

                    <p><img class="contactIcon" src="${urlPrefix}graphics/clock.png"> Monday – Sunday<br>8:00 – 17:00</p>

                    <a href="https://wa.me/260955336825/"><img class="socialMedia" src="${urlPrefix}graphics/whatsapp.png"></a>

                    <a href="https://facebook.com/drwatsondental/"><img class="socialMedia" src="${urlPrefix}graphics/facebook.png"></a>

                    <a href="https://instagram.com/drwatsondental/"><img class="socialMedia" src="${urlPrefix}graphics/instagram.png"></a>
            
            </div>

            <div id="footer-map">
                
                <iframe width="100%" height="100%" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJoWDZn3OPQBkRRH8xyLO8-S0&key=AIzaSyBgB0tY8-gE3cfSSUZ5st4z152lfElE7Yk"></iframe>

            </div>

        </div>

        <!-- Footer menu links -->

        <nav id="footerMenu">

            <ul>

                <li><a class="footerMenu-link" href="https://drwatsondental.com/">Home</a></li>

                <li><a class="footerMenu-link" href="https://drwatsondental.com/about">About</a></li>

                <li><a class="footerMenu-link" href="https://drwatsondental.com/contact">Contact</a></li>

                <li><a class="footerMenu-link" href="https://drwatsondental.com/appointment">Appointment</a></li>
            
                <li><a class="footerMenu-link" href="https://drwatsondental.com/services">Services</a></li>

                <li><a class="footerMenu-link" href="https://drwatsondental.com/blog">Blog</a></li>

                <li><a class="footerMenu-link" href="https://drwatsondental.com/privacy">Privacy</a></li>

                <li><a class="footerMenu-link" href="https://drwatsondental.com/terms">Terms</a></li>

            </ul>
        
        </nav>

    <p>
        Copyright © ${currentYear} Dr Watson Dental Clinic
    </p>

    </footer>
        `;
    }
}

customElements.define("footer-component", footer);