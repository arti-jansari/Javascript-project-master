let [milisecond,second,minute,hour] = [0, 0, 0, 0];
let val = null;
document.getElementById('stoptiming').innerHTML = '00 : 00 : 00 : 000';
document.getElementById('Pause').addEventListener('click', pausevalue)
document.getElementById('reset').addEventListener('click', resetvalue1);
document.getElementById('start').addEventListener('click', startreading);



function resetvalue1() {    
    [hour, minute, second, milisecond] = [00, 00, 00, 000];
    document.getElementById('stoptiming').innerHTML = '00 : 00 : 00 : 000';
   
}


function pausevalue() {
    clearInterval(val)
}

function startreading() {
    if (val !== null) {
        clearInterval(val)
    }
    val = setInterval(displayfun, 10)
}

function displayfun() {
    milisecond += 10;
    if (milisecond == 1000) {
        milisecond = 0;
        second++;
        if (second == 60) {
            second = 0;
            minute++;
            if (minute == 60) {
                minute = 0;
                hour++               
            }
        }
    }
    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    let ms = milisecond < 10 ? "00" + milisecond : milisecond < 100 ? "0" + milisecond : milisecond;
   
    document.getElementById('stoptiming').innerHTML =` ${h} : ${m} : ${s} : ${ms}`
}
