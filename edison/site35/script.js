let countDate = new Date('jan 1, 2024 00:00:00').getTime();
const input = document.getElementById('input');
const button = document.getElementById('button');

setInterval(countdown, 1000);

function countdown() {
    if(!Number(countDate)){
        console.error('countdown is not number');
        return;
    }
    const now = new Date().getTime();
    const gap = countDate - now;

    if(gap < 0) {
        document.getElementById('day').innerText = "00";
        document.getElementById('hour').innerText = "00";
        document.getElementById('minute').innerText = "00";
        document.getElementById('second').innerText = "00";
        return;
    }

    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute; 
    const day = 24 * hour;

    const leftDay = Math.floor(gap / day);
    const leftHour = Math.floor((gap % day) / hour);
    const leftMinute = Math.floor((gap % hour) / minute);
    const leftSecond = Math.floor((gap % minute) / second);

    document.getElementById('day').innerText = leftDay;
    document.getElementById('hour').innerText = leftHour;
    document.getElementById('minute').innerText = leftMinute;
    document.getElementById('second').innerText = leftSecond;
}

countdown()


button.addEventListener('click', () => {
    countDate = new Date(input.value).getTime();
})
