const timer = (deadLine, hasDays = false) => {
  const timerID = document.getElementById("timer");
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  const timerMeridiem = document.getElementById("timer-meridiem");

  const dateStop = new Date(deadLine).getTime();
  let timerHandle;

  const leadingZero = (num) => (num < 10 ? "0" + num : "" + num);

  const getTimeRemaining = () => {
    const dateNow = new Date();
    const timeRemaining = (dateStop - dateNow.getTime()) / 1000;
    const days = Math.floor(timeRemaining / 3600 / 24);
    let hours = Math.floor(timeRemaining / 3600);
    hours = hasDays ? hours % 24 : hours;
    const timerMeridiem = dateNow.toLocaleTimeString("en-US");

    return {
      timeRemaining,
      days: leadingZero(days),
      timerMeridiem,
    };
  };

  const updateClock = () => {
    const getTime = getTimeRemaining();
    timerID.textContent = getTime.timerMeridiem;
  };

  timerHandle = setInterval(updateClock, 1000);
};

export default timer;
