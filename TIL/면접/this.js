// 단독으로 쓴 this
var x = this;
console.log(x);

// 함수 안에서 쓴 this
function myFunction() {
    return this;
}

console.log(myFunction);

var num = 0;
function addNum() {
    this.num = 100;
    num++;

    console.log(num);
    console.log(window.num);
    console.log(num === window.num);
}

addNum();

// 메서드 안에서 쓴 this
var person = {
    firstName : 'John',
    lastName : 'Doe',
    fullName : function() {
        return this.firstName + ' ' + this.lastName;
    },
};

person.fullName();

var num = 0;

function showNum () {
    console.log(this.num);
}

showNum();

var obj = {
    num : 200,
    func : showNum,
};

obj.func(); 

// 이벤트 핸들러 안에서 쓴 this
var btn = document.querySelector('#btn');
btn.addEventListener("click", function() {
    console.log(this);
});

function Person(name) {
    this.name = name;
}

var kim = new Person("kim");
var lee = new Person('lee');

console.log(kim.name);
console.log(lee.name);

var name = 'window';
function Person(name) {
    this.name = name;
}

var kim = Person('kim');

console.log(window.name);

// 명시적 바인딩을 한 this
function whoisThis() {
    console.log(this);
}

whoisThis()

var obj = {
    x : 123,
};

whoisThis.call(obj);

function Character(name, level) {
    this.name = name;
    this.level = level;
}

// 생성자 함수 만들기
function Player(name, level, job) {
    this.name = name;
    this.level = level;
    this.job = job;
}

function Player_this(name, level, job) {
    Character.apply(this, [name, level]);
    this.job = job;
}

var me = new Player('Nana', 10, 'Magican');

// 에러가 나는 함수
function func(a,b,c) {
    console.log(arguments);
    arguments.push('Hi');
}

function func(a,b,c) {
    var args = Array.prototype.slice.spply(arguments);
    args.push('hi!');
    console.dir(args);
}

func(1,2,3);

var list = {
    0 : 'kim',
    1 : 'lee',
    2 : 'park',
    length : 3,
};

Array.prototype.push.call(list, 'Choi');
console.log(list);

var children = document.body.children;

children.forEach(function (el) {
    el.classList.add('on');
})

// 화살표 함수로 쓴 this
var Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.say = function() {
        console.log(this);

        setTimeout(function() {
            console.log(this);
            console.log(this.name + ' is' + this.age + ' years old');
        }, 100);
    };
};
var me = new Person('Nana', 28);
me.say()

// 이건 화살표 함수로 수정이 가능함
var Person_arrow = function(name, age) {
    this.name = name;
    this.age = age;
    this.say = function() {
        console.log(this);

        setTimeout(() => {
            console.log(this);
            console.log(this.name + ' is' + this.age + ' years old');
        }, 100);
    }
}

var me = new Person('Nana', 28);