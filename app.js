//Variables
const hora = document.querySelector("#hour");
const fecha = document.querySelector("#fecha");

const monthNames = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

document.addEventListener('DOMContentLoaded',change);

function change (){
    setInterval(() => {
        let date = new Date();
        let dateFecha = {
            day: date.getDate(),
            month: date.getMonth(),
            year:date.getFullYear(),
        };
        let dateHour = {
            hour:date.getHours(),
            minutes:date.getMinutes(),
            seconds:date.getSeconds(),
        };

        $.getJSON('https://api.wipmania.com/jsonp?callback=?', function (data) {
            document.getElementById("country").textContent = data.address.country;
        });
        
        hora.textContent = `${dateHour.hour}:${dateHour.minutes}:${dateHour.seconds}`;
        fecha.textContent = `${dateFecha.day} ${monthNames[dateFecha.month]} ${dateFecha.year}`;
    },1000);
};