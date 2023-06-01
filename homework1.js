// Задача: убрать дублекаты из массива

const myArr = [1, 3, 4, 2, 4, 2, 3, 7, 10, 23]

// Решение
// 1. Проверка на принятие массива
// 2. Перебрать каждое значение массива, и при находке похожего числа в этом же массива удалить его

// метод includs

// function MyIncludes(arr, item) {
//   let result = false
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if (arr[i] === item) {
//       result = true
//       break 
//     }    
//   }
//   return result
// }

// console.log(MyIncludes(myArr, 4)); 

function My(arr) {
  let newArr = []
  if(Array.isArray(arr)) {
    for (const iterator of arr) {
      if (!newArr.includes(iterator)) {
        newArr.push(iterator)
      }
    }
  }
  return newArr
}

function removeDuble(arr) {
  if (Array.isArray(arr)) {
    return [...new Set(arr)]
  }
}

const set = new Set()
console.log(set);
set.add(1)
console.log(set);
set.add(2)
console.log(set)
set.add(1)
console.log(set)

console.log(removeDuble(myArr));

console.log(My(myArr));
