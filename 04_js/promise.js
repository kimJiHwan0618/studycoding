"use strict";
// Promise ( 약속 )
//// 비동기를 간편하게 처리하게 도와주는 자카스크립트 오브젝트트

//// 2가지 포인트를 기억하기

// 1. state ( 상태 )
//// state : pengind => fulfilled ( 완료 ) or rejected

// 2. 정보공급자, 소비자 이해하기
//// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  // console.log("doing something...");
  setTimeout(() => {
    resolve("jeehwan");
    // reject(new Error("eror"));
  }, 2000);
});

// 2. Consmers : then, catch, finally
promise
  .then((value) => {
    // console.log(value);
  })
  .catch((error) => {
    // console.log(error);
  })
  .finally(() => {
    // console.log("gdgdg");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  });
// .then((num) => console.log(num));
