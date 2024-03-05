// function outerFunc() {
//     var x = 10;
//     var innerFunc = function() {console.log(x);}
//     innerFunc();
// }

// outerFunc();

function outerFunc() {
    var x = 10;
    var innerFunc = function() {console.log(x)};
    return innerFunc;
}

// 함수 outerFunc를 호출하면 내부 함수 innerFunc가 반환된다
// 그리고 함수 outerFunc의 실행 컨텍스트는 소멸한다.

var inner = outerFunc();
inner();