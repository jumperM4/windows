const timer = (id, deadline) => {
  const addZero = (num) => {
    return num <= 9 ? "0" + num : num;
  };

  const getTimeRemaining = (endtime) => {
    const total = Date.parse(endtime) - Date.parse(new Date());

    const d = new Date(total);
    const [hour, minute, second] = d
      .toLocaleString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      .split(":");

    const seconds = second;
    const minutes = minute;
    const hours = hour - 3;
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const setClock = (selector, endTime) => {
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");

    const timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endTime);

      // days.textContent = addZero(t.days);
      // hours.textContent = addZero(t.hours);
      // minutes.textContent = addZero(t.minutes);
      // seconds.textContent = addZero(t.seconds);

      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        clearInterval(timeInterval);
      }
    }
  };
  setClock(id, deadline);
};

export default timer;
