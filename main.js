const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')

const workMin = document.getElementById('w_minutes')
const workSec = document.getElementById('w_seconds')

const breakMin = document.getElementById('b_minutes')
const breakSec = document.getElementById('b_seconds')

let startTimer



start.addEventListener('click', () => {
    if (startTimer == undefined) {
        startTimer = setInterval(timer, 1000)
    } else {
        alert('Timer is allready running bro!')
    }
})

reset.addEventListener('click', () => {
    workMin.innerHTML = 25
    workSec.innerHTML = 0

    breakMin.innerHTML = 5
    breakSec.innerHTML = 0
    stopTimer()
    document.getElementById('counter').innerHTML = 0
    startTimmer = undefined
})

stop.addEventListener('click', () => {
    stopTimer()
    startTimer = undefined
})

function timer() {

    if (workSec.innerHTML != 0) {
        workSec.innerHTML--
    } else if (workMin.innerHTML != 0 && workSec.innerHTML == 0) {
        workSec.innerHTML = 59
        workMin.innerHTML--
    }
    if (workMin.innerHTML == 0 && workSec.innerHTML == 0) {
        if (breakSec.innerHTML != 0) {
            breakSec.innerHTML--
        } else if (breakMin != 0 && breakSec.innerHTML == 0) {
            breakSec.innerHTML = 59
            breakMin.innerHTML--
        }
    }
    if (workMin.innerHTML == 0 && workSec.innerHTML == 0 && breakMin.innerHTML == 0 && breakSec == 0) {
        workMin.innerHTML = 1
        workSec.innerHTML = 00

        breakMin.innerHTML = 5
        breakSec.innerHTML = 0

        document.getElementById('cycles').innerHTML++
    }
}

function stopTimer() {
    clearInterval(startTimer)
}