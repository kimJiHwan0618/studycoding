// tsc '타입스크립트 파일명'
// 01.타입스크립트를 자바스크립트로 컴파일 하는 명령어
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// tsc --init
// 02.tsc 환경설정 파일 추가 (tsconfing.json)
// tsc -w '타입스크립트 파일명'
// 03.컴파일된 자바스크립트에 자동으로 감시하고 반영함
var student = {
    name: 'Jake',
    course: 'Geting Started with TypeScript',
    codingIQ: 80,
    code: function () {
        console.log('brain is working hard');
    }
};
// function calculateCodingIQ (lostPoints) {
//     return 100 - lostPoints;
// }
// 04.리턴값이 숫자 계산식인걸 인식해, 인자값을 숫자로 인식함
// --------------------------------------------------
// -- 타입 명시
// ---- 변수를 선언할 때, 변수 값의 타입을 명시함으로써 
// ---- 변수 값의 데이터 타입을 지정!
// --------------------------------------------------
// let studentID:number = 12345;
// let studentName:string = 'JiHwan Kim';
// let age:number = 28;
// let gender:string = 'female';
// let subject:string = 'Javascript';
// let courseCompleted:boolean = false;
// function getStudentDetails(studentID: number ): {
//     studentID: number;
//     studentName: string;
//     age: number;
//     gender: string;
//     subject: string;
//     createDate: Date;
// } {
//     return null;
// }
//  :void - 이 함수는 아무것도 반환하지 않는다 
//  -- 함수가 다른 값을 반환한다면, 함수에 반환하는 값에 타입명시
// --------------------------------------------------------------------------
// 오브젝트의 프로퍼티를 제한하는 방법 
// -- 01.enum
// -- 02.리터럴 타입
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
})(GenderType || (GenderType = {}));
var student1 = {
    studentID: 121212,
    studentNmae: 'JiHwan',
    age: 28,
    gender: 'male',
    subject: 'Mongo DB',
    courseCompleted: false
};
function getStudentDetails(studentID) {
    return {
        studentID: 123456,
        studentName: '가영',
        gender: 'male',
        subject: 'Node JS',
        courseCompleted: true
    };
}
function saveStudentDetails(student) {
}
// saveStudentDetails(student1)
// --------------------------------------------------------------------------
// any타입 : 아무 타입이나 선언될수 있다
var someValue = 5;
someValue = 'hello';
someValue = true;
someValue = {};
// 유니언타입 : 선언될수 있는 여러개의 타입을 선언할 수 있다.
var unionValue = 5;
var totalCost;
var orderID;
var calculateTotalCost = function (price, qty) {
};
var findOrderID = function (customer, productId) {
    return orderID;
};
// --------------------------------------------------------------------------
// 함수의 타입 명시
function sendGreeting(message, userName) {
    if (userName === void 0) { userName = 'there'; }
    console.log(message + ", " + userName);
}
sendGreeting('Hello');
// --------------------------------------------------------------------------
// 타입스크립트는 객체지향!!  class와 object
var Employee = /** @class */ (function () {
    function Employee(fullName, age, jobTitle, hourlyRate, workingHoursPerWeek) {
        var _this = this;
        this.printEmployeeDetails = function () {
            console.log(_this.fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this.jobTitle + " \uC774\uACE0 \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740\n                   " + _this.hourlyRate * _this.workingHoursPerWeek + "\uB2EC\uB7EC\uC774\uB2E4\n                   ");
        };
        this.fullName = fullName;
        this.age = age;
        this.jobTitle = jobTitle;
        this.hourlyRate = hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
    }
    return Employee;
}());
var employee1 = new Employee('민수', 28, '초보웹개발자', 40, 35);
employee1.printEmployeeDetails();
var person1 = {
    name: '김사람',
    age: 20
};
var expert1 = {
    name: '김개발',
    age: 24,
    skills: ['javascript', 'react']
};
var people = [person1, expert1];
console.log(people);
//   --Generics ex)
function merge(a, b, c) {
    return __assign(__assign(__assign({}, a), b), { c: c });
}
var merged = merge({ foo: 1 }, { bar: 1 }, 5);
//   console.log(merged)
// 그런데, 이렇게 하면 타입 유추가 모두 깨진거나 다름이 없습니다.
// 결과가 any 라는 것은 즉 merged 안에 무엇이 있는지 알 수 없다는 것 입니다.
// ex1)
function allCar(a, b) {
    return __assign(__assign({}, a), b);
}
var merged2 = allCar({ foo: 1 }, { bar: 1 });
console.log(merged2);
//   ex2)
function wrap(param) {
    return {
        param: param
    };
}
var wrapped = wrap([1, 2, 3]);
console.log(wrapped);
var items = {
    list: [{ asd: 1 }, { asd: 1 }, { asd: 1 }]
};
var love = {
    list: ['l', 'o', 'v', 'e']
};
var test = {
    ts: 123,
    asdasd: '123'
};
console.log(test);
var person = {
    name: '김사람',
    age: 20
};
var expert = {
    name: '김개발',
    skills: ['javascript', 'react']
};
