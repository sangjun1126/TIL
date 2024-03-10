자바스크립트의 this 키워드는 함수가 호출된 문맥에 따라 참조하는 대상을 가리킵니다. 이는 함수가 호출된 방식에 따라 결정됩니다.

this의 값은 함수가 호출된 방식에 따라 다양합니다:

전역 문맥(Global Context): this가 함수 내부가 아닌 곳에서 사용되거나, 객체의 메소드가 아닌 함수 내부에서 사용될 때, this는 전역 객체를 가리킵니다 (브라우저에서는 window, Node.js에서는 global).

javascript
Copy code
console.log(this === window); // 브라우저에서는 true
함수 문맥(Function Context): 함수가 객체의 메소드로 호출될 때, this는 해당 객체를 가리킵니다.

javascript
Copy code
const obj = {
    name: '객체',
    greet: function() {
        console.log('안녕하세요, ' + this.name);
    }
};

obj.greet(); // "안녕하세요, 객체"
생성자 문맥(Constructor Context): 생성자 함수 내부에서 사용될 때, this는 새로운 객체를 가리킵니다.

javascript
Copy code
function Person(name) {
    this.name = name;
}

const person1 = new Person('사람');
console.log(person1.name); // "사람"
명시적으로 바인딩된 문맥(Explicitly Bound Context): call, apply, bind 메소드를 사용하여 함수에 명시적으로 this를 바인딩할 수 있습니다.

javascript
Copy code
function greet() {
    console.log('안녕하세요, ' + this.name);
}

const person = { name: '사람' };
greet.call(person); // "안녕하세요, 사람"
이러한 방식으로 this는 함수가 호출된 컨텍스트에 따라 달라지며, 잘못된 컨텍스트에서 사용될 경우 예기치 않은 결과를 초래할 수 있습니다. 따라서 this의 동작을 이해하고 올바르게 사용하는 것이 중요합니다.




