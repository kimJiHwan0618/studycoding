// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
  // do network request in 10 secs....
  return "ellie";
}

const user = fetchUser();
// console.log(user);
// user.then(console.log);

// 2.await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "사과";
}

async function getBanana() {
  await delay(1000);
  return "바나나";
}

async function pickUpFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return apple + "+" + banana;
}
// 속도 향상을 위한 병렬 방법이지만 실제론 아래의 api를 잉ㅇ

// function test() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

// pickUpFruits().then(console.log);

//  3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join("+")
  );
}
// pickAllFruits().then(console.log);
