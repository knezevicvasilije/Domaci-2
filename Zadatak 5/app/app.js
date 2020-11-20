//optionBtns
const pomodoro = document.querySelector('#pomodoro');
const shortBreak = document.querySelector('#shortB');
const longBreak = document.querySelector('#longB');
//output
var output = document.querySelector("#timeOutput");
//controlBtns
const controls = document.querySelector('#controls');
const start = document.querySelector('#start');
const stopp = document.querySelector('#stop');
const reset = document.querySelector('#reset');
var sound = new Audio("click.mp3");

var counter = 0;
var timeLeft = 0;

function convertSeconds(s){
    var min = Math.floor(s / 60);
    var sec = s % 60;
    return min + ':' + sec;
}
var startTimer;
var interval;

function setup(){
    output.innerHTML = (convertSeconds(timeLeft-counter));
    function timeIt(){
        counter++;
        output.innerHTML = (convertSeconds(timeLeft-counter));
        document.title = "("+output.textContent+")"+"DevelopersLabTimer";
    }
    if(startTimer === undefined){
        interval = setInterval(timeIt, 1000);
    }else{
        alert("lala");
    }
}


pomodoro.addEventListener('click', () =>{
    controls.classList.add('controlBtnsShow');
});


shortBreak.addEventListener('click', () =>{

    timeLeft = 299;
    setup();
    
});
longBreak.addEventListener('click', () =>{
    timeLeft = 599;
    setup();
    sound.play();
});

//Control Buttons
start.addEventListener('click', () =>{
    timeLeft = 1499;
    setup();
     

});

stopp.addEventListener('click', () =>{
stopInterval();

});

reset.addEventListener('click', () =>{
    stopInterval();
    output.innerHTML = '25:00';
    //Jedini nacin da onemogucim da na ponovno startovanje interval ne krene od one sekunde na kojoj je zaustavljen 
    window.location.reload();
})
//kako restartovati interval??

function stopInterval(){
    clearInterval(interval);
    
}
