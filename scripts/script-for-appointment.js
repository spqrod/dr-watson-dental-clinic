// Set min date for input-date as today's date

let todayDate = new Date();

todayDate = `${todayDate.getFullYear()}-${todayDate.getMonth()+1}-${todayDate.getDate()}`;


const inputDate = document.getElementById("date");

inputDate.setAttribute("min", todayDate);