// Javascript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting : var, function declaration
// 호이스팅 짚고 넘어가기

// 자바스크립트 코드는 동기 -> 위에서부터 아래로 코드를 읽음.
console.log("1");
setTimeout((evt) => console.log("2"), 1000);
console.log("3");

// Synchronous callback

function print(print) {
  print();
}

print(() => console.log("hello"));
