// var user = {
//     id : 1,
//     name : 'sangjun'
// };

// if (user.id === 1) {
//     console.log(user.name);
// }

// var user = fetchUser('domain.com/users/1');
// if (user.id === 1) {
//     console.log(user.name);
// }

// async function logname() {
//     var user = await fetchUser('domain.com/users/1');
//     if (user.id === 1) {
//         console.log(user.name);
//     }
// }

// function fetchItems() {
//     return new Promise(function(resolve, reject) {
//         var items = [1,2,3];
//         resolve(items)
//     });
// }

// async function logItems() {
//     var resultItems = await fetchItems();
//     console.log(resultItems);
// }

async function logTodoTitle() {
    try {
        var user = await fetchUser();
        if (user.id === 1) {
            var todo = await fetchTodo();
            console.log(todo.title);
        }
    } catch(error) {
        console.log(error);
    }
}