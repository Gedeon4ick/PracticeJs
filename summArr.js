const arr = [1, 2, '3', 4, '5', {
  0: "2"
}, 2]
// 0

function summ(arr) {
  let result = {
    sum: 0,
    trash: []
  }
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == 'number') {
        result.sum += arr[i]
      } else {
        result.trash.push(arr[i])
      }
    }
    return result

  } else {
    return `Уважаемый введи массив, а ты передал ${typeof arr}`
  }
}

console.log(summ(arr));
console.log(summ(2));
console.log(summ('2'));