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

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  // console.log(state);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const createToDo = (toDo) => {
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.appendChild(li);
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
};

store.subscribe(() => console.log(store.getState()));

form.addEventListener("submit", onSubmit);
