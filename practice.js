// найти число в отсортированном массиве 

const num = 1000
const arrNew = [2,3,12,13, 15,18,21,25,33,23234]

function binarySearch(number, arr) {
  let right = arr.length - 1
  let left = 0

  while (left <= right) {
    let med = Math.floor((left+right)/2)
    if (arr[med] === number) {
      return med
    } else if (arr[med] < number) {
      left = med + 1
    } else {
      right = med - 1
    }
  } return "Такого числа нет"
}

console.log(binarySearch(num, arrNew))