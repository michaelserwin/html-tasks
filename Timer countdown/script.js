const countdownContainer = document.querySelector('.countdown-container');
const birthdayDateInput = document.getElementById('birthday-date');
const startCountdownButton = document.getElementById('start-countdown');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

let birthdayDate;
let countdownInterval;

startCountdownButton.addEventListener('click', startCountdown);

function startCountdown() {
    birthdayDate = new Date(birthdayDateInput.value);
    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const now = new Date();
    const timeLeft = birthdayDate - now;

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        countdownContainer.innerHTML = '<h1>HAPPY BIRTHDAY!</h1>';
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysElement.textContent = padZero(days);
        hoursElement.textContent = padZero(hours);
        minutesElement.textContent = padZero(minutes);
        secondsElement.textContent = padZero(seconds);
    }
}

function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}


