function outer() {
    let outerVar = 'i am outer';

    function inner() {
        console.log(outerVar)
    }

    inner();
}

outer();