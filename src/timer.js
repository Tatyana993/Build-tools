const inputTime = document.getElementById('time');
const startHandler = document.getElementById('button');
const timerBlock = document.getElementById('timer');
const stopHandler = document.getElementById('button_close');
let audioTimer = new Audio('audio.timer.mp3');


startHandler.addEventListener('click', timerGo);
stopHandler.addEventListener('click', function() { 
    audioTimer = false;
});
    
function timerGo() {
let timeMinut = parseInt(inputTime.value) * 60;

  setInterval(function () {
    seconds = timeMinut%60 // Получаем секунды
    minutes = timeMinut/60%60 // Получаем минуты
    hour = timeMinut/60/60%60 // Получаем часы
    if (timeMinut <= 0) {
        clearInterval(timer);
        audioPlay();

    } else { 
        let timerShowing = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerBlock.innerHTML = timerShowing; // Выводим строку в блок для показа таймера
    }
    --timeMinut; // Уменьшаем время таймера  
}, 1000)
};

function audioPlay() { //воспроизведение звука при окончании времени
  audioTimer.play();
  
};




