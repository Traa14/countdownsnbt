function updateCountdown(){

const now = new Date().getTime();
const targetDate = new Date("Apr 21, 2026 05:59:59").getTime();
const distance = targetDate - now;

if(distance <= 0){

document.getElementById("countdown").innerHTML = `
<p style="margin-top:10px;font-size:18px;">
Selamat mengerjakan SNBT<br>
Semoga lolos PTN impian!
</p>
`;

clearInterval(timer);
return;
}

const days = Math.floor(distance / (1000*60*60*24));
const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
const seconds = Math.floor((distance % (1000*60))/1000);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;

}

const timer = setInterval(updateCountdown,1000);

updateCountdown();