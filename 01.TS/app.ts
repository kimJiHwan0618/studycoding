// tsc '타입스크립트 파일명'
// 01.타입스크립트를 자바스크립트로 컴파일 하는 명령어

// tsc --init
// 02.tsc 환경설정 파일 추가 (tsconfing.json)

// tsc -w '타입스크립트 파일명'
// 03.컴파일된 자바스크립트에 자동으로 감시하고 반영함

let student = {
    name : 'Jake',
    course : 'Geting Started with TypeScript',
    codingIQ : 80,
    code : function () {
      console.log('brain is working hard')
    }
}

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

enum GenderType {
    Male = 'male',
    Female = 'female'
}

let student1 = {
    studentID : 121212,
    studentNmae : 'JiHwan',
    age : 28,
    gender : 'male',
    subject : 'Mongo DB',
    courseCompleted: false
}

interface Student {
    readonly studentID : Number,
    studentName : String,
    age?: Number,
    gender: 'male' | 'female' | 'genderNeutral',
    subject: String,
    courseCompleted: Boolean,
    addComment?: (comment:String) => String
}

function getStudentDetails(studentID: Number) : Student {
    return {
        studentID : 123456,
        studentName : '가영',
        gender : 'male',
        subject : 'Node JS',
        courseCompleted : true
    }
}

function saveStudentDetails (student: Student) :void {

}
// saveStudentDetails(student1)
// --------------------------------------------------------------------------
// any타입 : 아무 타입이나 선언될수 있다
let someValue: any = 5;
someValue = 'hello'
someValue = true
someValue = {}

// 유니언타입 : 선언될수 있는 여러개의 타입을 선언할 수 있다.
let unionValue: Number | String | Object = 5;

// 타입 엘리어시스 : 새로운 타입을 변수로 지정할 수 있다.
type StrOrNum = Number | String;

let totalCost : Number;
let orderID : StrOrNum;

const calculateTotalCost = (price : StrOrNum, qty : Number)
:void => {
    
}

const findOrderID = (customer : { costomerId: StrOrNum, name: 
    String}, productId: StrOrNum): StrOrNum => {
        return orderID;
}

// --------------------------------------------------------------------------
// 함수의 타입 명시
function sendGreeting (message : String, userName = 'there'): void {
    console.log(`${message}, ${userName}`)
}
sendGreeting('Hello');

// --------------------------------------------------------------------------
// 타입스크립트는 객체지향!!  class와 object
class Employee {
  fullName: string;
  age: number;
  jobTitle: string;
  hourlyRate: number;
  workingHoursPerWeek: number;


  constructor( fullName : string, age : number, jobTitle : string
  , hourlyRate  : number, workingHoursPerWeek : number)
{
    this.fullName = fullName;
    this.age = age;
    this.jobTitle = jobTitle;
    this.hourlyRate = hourlyRate;
    this.workingHoursPerWeek = workingHoursPerWeek;
  }

  printEmployeeDetails = ():void => {
      console.log(`${this.fullName}의 직업은 ${this.jobTitle} 이고 일주일의 수입은
                   ${this.hourlyRate*this.workingHoursPerWeek}달러이다
                   `)
      }
}

let employee1 = new Employee('민수',28,'초보웹개발자',40,35);
employee1.printEmployeeDetails();


// 5/17---------------------------------------
// --인터페이스 복습

interface Person {
    name: string;
    age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
  }
  interface Developer extends Person {
    skills: string[];
  }
  
  const person1: Person = {
    name: '김사람',
    age: 20
  };
  
  const expert1: Developer = {
    name: '김개발',
    age : 24,
    skills: ['javascript', 'react']
  };
  
  const people: Person[] = [person1, expert1];
  console.log(people)

//   --Generics ex)
function merge(a: any, b: any, c:number): any {
    return {
      ...a,
      ...b,
      c
    };
  }
  
  const merged = merge({ foo: 1 }, { bar: 1 },5);
//   console.log(merged)
// 그런데, 이렇게 하면 타입 유추가 모두 깨진거나 다름이 없습니다.
// 결과가 any 라는 것은 즉 merged 안에 무엇이 있는지 알 수 없다는 것 입니다.
// ex1)
function allCar<handle, tire>(a: handle, b: tire): handle & tire {
    return {
      ...a,
      ...b
    };
  }
  
  const merged2 = allCar({ foo: 1 }, { bar: 1 });
  console.log(merged2)
//   ex2)
function wrap<asdasd>(param: asdasd) {
    return {
      param
    }
  }
  
  const wrapped = wrap([1,2,3]);
  console.log(wrapped)
//   이렇게 함수에서 Generics 를 사용하면 파라미터로 다양한 타입을 넣을 수도 있고 타입 지원을 지켜낼 수 있습니다.


// 이번엔 interface 에서 Generics 를 사용하는 방법을 알아봅시다.
interface Items<T> {
    list: T[];
  }
  
  const items: Items<object> = {
    list: [{asd : 1}, {asd : 1}, {asd : 1}]
  };
// type 에서 Generics 사용하기
type love<T> = {
    list: T[];
  };
  
  const love: Items<string> = {
    list: ['l', 'o', 'v','e']
  };
  interface Window {
    title: string
  }
  
  interface thisWindow<T>{
    ts: T,
    asdasd : string
  }

  const test: thisWindow<number> = {
      ts : 123,
      asdasd : '123'
  }
  console.log(test)










interface Person {
    name: string;
    age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
  }
  interface Developer {
    name: string;
    age?: number;
    skills: string[];
  }
  
  const person: Person = {
    name: '김사람',
    age: 20
  };
  
  const expert: Developer = {
    name: '김개발',
    skills: ['javascript', 'react']
  };