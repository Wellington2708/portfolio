const data = new Date();
let day = String(data.getDate()).padStart('0');
let month = String(data.getMonth() + 1).padStart(2, '0');
let year = String(data.getFullYear());


const date = document.querySelector('.date').innerHTML =`${ "Date: " + year + "/"+ month + "/"+ day}`