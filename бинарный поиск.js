const a = [2,4,34,5,32,343]

function retIndexNumb(number, arr) {
  let current = 0
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    current++
    if (element === number) {
      return [i, current]
    }
  }
}

console.log(retIndexNumb(5, a));

function indBinarySearch(number, arr) {
  let current = 0
  const newArr = arr.sort(function (a, b) {
    return a - b;
  })
  let left = 0
  let right = arr.length-1
  while (left <= right) {
    current++
    let mid = Math.floor((left + right)/2)
    if (arr[mid] === number) {
      return [mid, current]
    } else if(arr[mid] < number) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
}

console.log(indBinarySearch(5, a));

// бинарный поиск сокращает кол-во итераций