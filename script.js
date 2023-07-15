const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');
const milisecondEl = document.getElementById('milisecond');
const ampmEl = document.getElementById('ampm');

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    // let ms = new Date().getMilliseconds();
    let ampm = 'AM';

    if (h > 12) {
        h -= 12;
        ampm = 'PM';
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    // ms = ms < 10 ? "0" + ms : ms;

    hourEl.innerHTML = h;
    minuteEl.innerHTML = m;
    secondEl.innerHTML = s;
    // milisecondEl.innerHTML = ms;
    ampmEl.innerHTML = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();