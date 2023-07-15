let countdownIntervalId;

function updateCountdown() {
    const eventDate = new Date(document.getElementById("eventDate").value);
    const currentDate = new Date();
    let timeDifference = eventDate - currentDate;

    if (timeDifference <= 0) {
        clearInterval(countdownIntervalId);
        timeDifference = 0;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

document.getElementById("eventForm").addEventListener("submit", function (event) {
    event.preventDefault();

    clearInterval(countdownIntervalId);

    updateCountdown();


    countdownIntervalId = setInterval(updateCountdown, 1000);
});
