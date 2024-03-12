const a = 'a';
let b = 'b';

b = 'c'

console.log(a);
console.log(b);

// 참조값 복사
// 이 코드는 기존 값에 영향을 끼친다.
const a2 = {
    one : 1,
    two : 2,
};

let b2 = a2;

b.one = 3;

console.log(a);
console.log(b);

// slice
const origin = ['a', 2, true, 4, "hi"];
const copy = origin.slice();

console.log(JSON.stringify(origin) === JSON.stringify(copy))

copy.push(10);

console.log(JSON.stringify(origin) === JSON.stringify(copy))

console.log(origin)
console.log(copy)