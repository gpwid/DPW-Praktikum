
const countDownDate = new Date("Jul 11, 2026 15:00:00").getTime();

const x = setInterval(function () {

    // Dapatkan waktu saat ini
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const clockElement = document.getElementById("clock");
    if (clockElement) {
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        // Format angka agar selalu dua digit, contoh: 09, 10
        const formattedDays = String(days).padStart(2, '0');
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        if (daysEl && hoursEl && minutesEl && secondsEl) {
            if (distance < 0) {
                clearInterval(x);
                daysEl.textContent = "00";
                hoursEl.textContent = "00";
                minutesEl.textContent = "00";
                secondsEl.textContent = "00";

                const clockEl = document.getElementById("clock");
                if (clockEl) {
                    clockEl.innerHTML = "<div style='color: #b5986c; font-size: 1.5em; font-weight: bold; text-align: center; width: 100%; margin: 20px 0;'>ACARA SEDANG BERLANGSUNG</div>";
                }
            } else {
                daysEl.textContent = formattedDays;
                hoursEl.textContent = formattedHours;
                minutesEl.textContent = formattedMinutes;
                secondsEl.textContent = formattedSeconds;
            }
        }
    }
}, 1000);
