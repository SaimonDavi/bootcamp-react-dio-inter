// function filtraPares(arr) {
//     return arr.filter(callbackFuncao);
// }

// function callbackFuncao(item) {
//     console.log(item % 2 === 0);
//     return item % 2 === 0;
// }

const filtraPares = (arr) => arr.filter((item) => {
    console.log(item % 2 === 0);
    return item % 2 === 0;
}) 

const nums = [1, 2, 3, 4, 5]

console.log(filtraPares(nums))