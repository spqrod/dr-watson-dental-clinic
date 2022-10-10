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

        // const htmlFileName = 
        //     window.location.pathname.slice(1);

        // if (htmlFileName == "index.html") 
        //     urlPrefix = "./"; else 
        //     urlPrefix = "../";


        this.innerHTML = 
        `
        <header>

        <!-- Header Logo -->

        <a class="logo" href="https://drwatsondental.com">
            <img src="${urlPrefix}graphics/logo.jpg" alt="dr-watson-dental-clinic-logo"></a>

        <!-- Header hamburger icon -->

        <input type="checkbox" id="hamburger-input-checkbox">
        <label class="hamburger-icon" for="hamburger-input-checkbox">
            <span class="hamburger-line" id="hamburger-line-1"></span>
            <span class="hamburger-line" id="hamburger-line-2"></span>
            <span class="hamburger-line" id="hamburger-line-3"></span>
        </label>

        <!-- Header menu links -->

        <nav>

            <ul>

                <li><a class="menulinks" href="https://drwatsondental.com/about">About</a></li>			
                <li><a class="menulinks" href="https://drwatsondental.com/contact">Contact</a></li>
                <li><a class="menulinks" href="https://drwatsondental.com/appointment">Appointment</a></li>
                <li><a class="menulinks" href="https://drwatsondental.com/services">Services</a></li>
                <li class="phone-and-whatsapp-in-nav"><a href="tel:+260955336825">Call +260 955 336825</a></li>
                <li class="phone-and-whatsapp-in-nav"><a class="social" href="https://wa.me/260955336825">
                    <img class="social-image" src="${urlPrefix}graphics/whatsapp.png"></a></li>
        
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
        
        // const htmlFileName = 
        //     window.location.pathname.slice(1);

        // if (htmlFileName == "index.html")
        //     urlPrefix = "./"; else
        //     urlPrefix = "../";

        this.innerHTML = `
        <footer>
        <div id="footer-container">

            <div id="contacts">

                <h1>Contacts</h1>
                <p><a class="contact-text-link" href="tel:+260955336825"><img class="contact-icon" src="${urlPrefix}graphics/phone.png"> +260 955 336825</a></p>
                <p><a class="contact-text-link" href="tel:+260950107838"><img class="contact-icon" src="${urlPrefix}graphics/landline.png"> +260 950 107838</a></p>
                <p><img class="contact-icon" src="${urlPrefix}graphics/map.png"> Leopards Hill Mall, Leopards Hill Rd, Bauleni, Lusaka, Zambia</p>
                <p><img class="contact-icon" src="${urlPrefix}graphics/clock.png"> Monday – Sunday<br>8:00 – 17:00</p>
                <a class="social" href="https://wa.me/260955336825/"><img class="social-image" src="${urlPrefix}graphics/whatsapp.png"></a>
                <a class="social" href="https://facebook.com/drwatsondental/"><img class="social-image" src="${urlPrefix}graphics/facebook.png"></a>
                <a class="social" href="https://instagram.com/drwatsondental/"><img class="social-image" src="${urlPrefix}graphics/instagram.png"></a>
            
            </div>

            <div id="map">
                <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBgB0tY8-gE3cfSSUZ5st4z152lfElE7Yk&callback=initMap"></script>

            </div>

        </div>

    <p>Copyright © ${currentYear} Dr Watson Dental Clinic</p>

    </footer>
        `;
    }
}

customElements.define("footer-component", footer);

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;