function outerFunction() {
    let outerVariable = 'i am outside';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const inner = outerFunction();
inner();