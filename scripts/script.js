// 	------------------------------
// 	Footer copyright text with auto year update
// 	------------------------------

const copyrightText = document.getElementById("copyright-text");
const currentYear = new Date().getFullYear();
copyrightText.innerText = `Copyright © ${currentYear} Dr Watson Dental Clinic`;