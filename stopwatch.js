let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let running = false;
let lapCount = 1;

function formatTime(time) {
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);

    return (
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0') + ':' +
        String(milliseconds).padStart(2, '0')
    );
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    document.getElementById("display").textContent = formatTime(elapsedTime);
}

function start() {
    if (running) return;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10);
    running = true;
}

function stop() {
    if (!running) return;
    clearInterval(timerInterval);
    running = false;
}

function reset() {
    clearInterval(timerInterval);
    running = false;
    elapsedTime = 0;
    lapCount = 1;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (!running) return;

    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapCount++}: ${formatTime(elapsedTime)}`;
    document.getElementById("laps").appendChild(lapItem);
}
