const ddayTxt = document.querySelector(".dDay");

function calcDate() {
  const today = new Date();
  const christmas = new Date(2022, 11, 25).getTime();
  const todayMs = today.getTime();
  const leftMs = christmas - todayMs;
  let leftDay = Math.floor(leftMs / (1000 * 60 * 60 * 24));
  let leftHour = String(
    Math.floor((leftMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, 0);
  let leftMinute = String(
    Math.floor((leftMs % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, 0);
  let leftSecond = String(Math.floor((leftMs % (1000 * 60)) / 1000)).padStart(
    2,
    0
  );
  ddayTxt.innerText = `${leftDay}d ${leftHour}h ${leftMinute}m ${leftSecond}s`;
}

calcDate();
setInterval(calcDate, 1000);
