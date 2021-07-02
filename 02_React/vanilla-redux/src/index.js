import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

const addNum = "addNum";
const minusNum = "minusNum";

const addCount = () => {
  countStore.dispatch({ type: addNum });
};
const minusCount = () => {
  countStore.dispatch({ type: minusNum });
};

add.addEventListener("click", addCount);
minus.addEventListener("click", minusCount);

// action 함수 store에 연결
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case addNum:
      return count + 1;
    case minusNum:
      return count - 1;
    default:
      return count;
  }
};
const countStore = createStore(countModifier);
// action 함수 store에 연결

// state값 변화를 감지
const onchange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onchange);
// state값 변화를 감지

// 초기값 설정
countStore.dispatch({ type: "defaultNum" });
// 초기값 설정
