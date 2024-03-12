// let a = 1;
// a = 2;
// console.log(a); 
// // 2

// 뮤터블

let a = { name: "kim" };
let b = a;

a.name = "lee";

console.log(a); 
// { name : "lee" }
console.log(a === b); 
// true

// spread o
const obj = { a : 1, b : 2 };
const newObj = { ...obj, c : 3 };
console.log(newObj)

// object.assign
const obj2 = { a: 1, b: 2 };
// Object.assign()을 사용하여 obj의 모든 프로퍼티를 복사한다.
const newObj2 = Object.assign({}, obj2, { c: 3 }); 
console.log(newObj2); s// { a: 1, b: 2, c: 3 }


// immer
import produce from "immer";

const obj3 = { a: 1, b: 2 };
// immer의 produce()를 사용하여 obj의 모든 프로퍼티를 복사한다.
const newObj3 = produce(obj, (draft) => {
  draft.c = 3;
}); 
console.log(newObj3); 
// { a: 1, b: 2, c: 3 }