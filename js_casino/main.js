// inputRangeNumber 에 최대값을 입력
// 입력한 숫자를 랜덤넘버 만드는 함수 안에 맥스값으로 넣어줌
// 고른 숫자를 출력하는 변수, 랜덤 숫자를 출력하는 변수 만들어야 됨
// inputGuessNumber 랑 랜덤으로 뽑아진 수랑 값이 같은지 판단하는 함수
// 값이 같으면 you won / 다르면 you lost! 를 띄워줌

const submit = document.querySelector("form");
const inputRange = parseInt(document.querySelector("#inputRangeNumber").value);
const inputGuess = parseInt(document.querySelector("#inputGuessNumber").value);
const resultCont = document.querySelector(".resultCont");
const yourChoice = document.querySelector(".yourChoise");
const machineChoise = document.querySelector(".machineChoise");
const result = document.querySelector(".result");
const gameResult = result.innerText;

const onEvent = () => {
  const machineNum = makeRandom(inputRange, 0);
  compareNum(inputGuess, machineNum);
  showResultText(inputGuess, machineNum);
};

const makeRandom = (max, min) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

const compareNum = (a, b) => {
  if (a === b) {
    result.innerText = "YOU WON!!";
  } else {
    result.innerText = "YOU LOST!!";
  }
};

const showResultText = (a, b) => {
  resultCont.classList.remove("hidden");
  yourChoice.innerText = a;
  machineChoise.innerText = b;
};

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  onEvent();
});

// gameResult = "";
// yourChoice.innerText = "";
// machineChoise.innerText = "";
// 결과창이 뜨면서 span에 내가 고른 숫자, 머신이 고른 숫자를 넣어준다
// 버튼을 누를 때마다 숫자와 결과가 업데이트 됨...
