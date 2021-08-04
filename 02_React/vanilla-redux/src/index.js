/* eslint-disable default-case */
import { createStore } from "redux";

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.getElementById("number");

// const addNum = "addNum";
// const minusNum = "minusNum";

// const addCount = () => {
//   countStore.dispatch({ type: addNum });
// };
// const minusCount = () => {
//   countStore.dispatch({ type: minusNum });
// };

// add.addEventListener("click", addCount);
// minus.addEventListener("click", minusCount);

// action 함수 store에 연결
// const countModifier = (count = 0, action) => {
//   switch (action.type) {
//     case addNum:
//       return count + 1;
//     case minusNum:
//       return count - 1;
//     default:
//       return count;
//   }
// };
// const countStore = createStore(countModifier);
// action 함수 store에 연결

// state값 변화를 감지
// const onchange = () => {
//   number.innerText = countStore.getState();
// };
// countStore.subscribe(onchange);
// state값 변화를 감지

// 초기값 설정
// countStore.dispatch({ type: "defaultNum" });
// 초기값 설정

// ↑↑↑ + , - 버튼을 통한 예제

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => toDo !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  console.log(id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerHTML = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};
store.subscribe(paintToDos);

// store.subscribe(() => console.log(store.getState()));

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
