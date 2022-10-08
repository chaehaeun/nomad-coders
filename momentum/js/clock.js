// const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes()).padStart(2, 0);
  const seconds = String(date.getSeconds()).padStart(2, 0);
  clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);

// setInterval은 첫시작은 안 치고 1초 뒤부터 출력하기 때문에 윈도 로드 되자마자
// 즉시 getClock() 이 실행되게 한 것
// 로드 되자마자 현재시각 -> 셋인터벌로+1초씩
