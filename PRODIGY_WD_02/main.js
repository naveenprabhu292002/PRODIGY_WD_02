let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let hourRef = document.getElementById('hours');
let minuteRef = document.getElementById('minutes');
let secondRef = document.getElementById('seconds');
let millisecondRef = document.getElementById('milliseconds');
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    hourRef.innerHTML = "00";
    minuteRef.innerHTML = "00";
    secondRef.innerHTML = "00";
    millisecondRef.innerHTML = "000";
});

function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    hourRef.innerHTML = hours < 10 ? "0" + hours : hours;
    minuteRef.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    secondRef.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    millisecondRef.innerHTML = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;
}
