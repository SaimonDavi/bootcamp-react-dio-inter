// function mapSemThis(arr){
//     return arr.map(function (value){
//         return value * 2;
//     });
// }

// function mapSemThis(arr){
//     return arr.map((value) => value * 2);
// }

const mapSemThis = (arr) => (arr.map((value) => value * 2))

const nums = [1, 2, 3, 4, 5]

console.log(mapSemThis(nums))