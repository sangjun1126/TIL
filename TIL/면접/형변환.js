number + number // number
number + string // string
string + string // string
string + boolean // string
number + boolean // number

// 다른 연산자일 경우
string * number // number
string * string // number
number * number // number
string * boolean // number
number * boolean // number

// 동치 비교
null === undefined
"0" == 0
0 == false
"0" == false

// 명시적 변환 (개발자가 의도를 가지고 데이터 타입을 변환시키는 것)
var trans = 100;

Object(trans);
console.log(typeof trans);

String(trans);
console.log(typeof trans);

Boolean(trans);
console.log(typeof trans);

