const timer = (deadLine, hasDays = false) => {
  const timerID = document.getElementById("timer");
  const timerDays = document.getElementById("timer-days");
  const timerRemaining = document.getElementById("timer-remaining");

  const dateStop = new Date(deadLine).getTime();
  let timerHandle;
  const weeks = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  const leadingZero = (num) => (num < 10 ? "0" + num : "" + num);

  const getTimeRemaining = () => {
    const dateNow = new Date();
    const timeRemaining = (dateStop - dateNow.getTime()) / 1000;
    const days = Math.floor(timeRemaining / 3600 / 24);
    let hours = Math.floor(timeRemaining / 3600);
    hours = hasDays ? hours % 24 : hours;
    const timerMeridiem = dateNow.toLocaleTimeString("en-US");
    const weekName = weeks[dateNow.getDay()];

    return {
      timeRemaining,
      days: leadingZero(days),
      timerMeridiem,
      weekName,
    };
  };

  const updateClock = () => {
    const getTime = getTimeRemaining();

    timerID.textContent = getTime.timerMeridiem;
    timerDays.textContent = getTime.weekName;
    timerRemaining.textContent = getTime.days;
  };

  timerHandle = setInterval(updateClock, 1000);
};

export default timer;
