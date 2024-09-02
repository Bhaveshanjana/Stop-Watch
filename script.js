let timerdisplay = document.querySelector('.timerDisplay');
let buttons = document.getElementById('button');
let stopBtn = document.getElementById('stopBtn'); 
let startBtn = document.getElementById('startBtn'); 
let resetBtn = document.getElementById('resetBtn');

let min = 0o0;
let msec = 0o0;
let sec = 0o0;

let timerid = null;

startBtn.addEventListener('click',function(){
 if(timerid !== null){
    clearInterval(timerid);
}
timerid = setInterval(starttimer,10)
})
stopBtn.addEventListener('click',function(){
       clearInterval(timerid)
   })
   resetBtn.addEventListener('click',function(){
       clearInterval(timerid);
       timerdisplay.innerHTML = `00 : 00 : 00 `;
       msec = sec = min = 0o0;
   })
function starttimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        sec++;
    if(sec == 60){
        sec = 0;
        min++
    }
}

let minstring = min < 10 ? `0${min}` : min;
let secstring = sec < 10 ? `0${sec}` : sec;
let msecstring = msec < 10 ? `0${msec}` : msec;

timerdisplay.innerHTML = `${minstring} : ${secstring} : ${msecstring}` ;
}