let settiming = new Date ('jan 01, 2023 00:00:00');
function settimingvalue(){
let nowdate = new Date();
 let difference = settiming - nowdate;


 let day = Math.floor(difference/(1000 *60* 60 *24));
 let hour = Math.floor(difference/(1000 *60* 60)-(day*24));
 let minutes = Math.floor(difference/(1000 *60)-(day*24*60)-(hour*60));
let second = Math.floor(difference/1000-(day*24*60*60)-(hour*60*60)-(minutes*60));







document.getElementById('day').innerHTML = day
document.getElementById('hour').innerHTML =hour ;
document.getElementById('min').innerHTML = minutes ;
document.getElementById('second').innerHTML =  second ;
}
 setInterval('settimingvalue()',1000)
