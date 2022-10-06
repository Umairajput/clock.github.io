function showTime() {
    var clockTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    document.getElementById("screen").innerText = clockTime
}
var intervalRef;
function startClock() {
    intervalRef = setInterval(showTime, 1000)
}
function stopClock() {
    clearInterval(intervalRef)
}