const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveTodos() {
  // 애먹었던 부분의 원인이 이 부분이었다
  // 무지성으로 saveTodos의 파라미터로 toDos를 넣고 있었음ㅠ
  // toDos(<- 배열)은 이미 값이 들어와있는데 파라미터가 웬말이냐 진짜ㅋㅋ
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}
function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// if (savedToDos !== null) {
//   const parsedToDos = JSON.parse(savedToDos);
//   parsedToDos.forEach(paintTodo); //자동으로 item들이 하나씩 파라미터로 들어감...첨 안 사실
//   // 여기서 끝내게 되면 아이템을 추가하고 새로고침할 때마다 기존 로컬스토리지가
//   // 없어지고 새로 입력한 아이템만 남게 됨

//   // 덮어씌워지는 이유 : 앱이 시작할 때 array는 빈 값으로 시작하기 때문
// }
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // 이전 로컬에 저장돼있던 정보를 array에 다시 입력한다
  parsedToDos.forEach(paintTodo);
}

// 삭제 기능 구현
// array에서 아이템을 삭제하는 것이 아닌
// 해당하는 id를 제외한 값으로 새 array를 만드는 것임
// filter() 를 쓰면 쉽게 구현할 수 있다.
