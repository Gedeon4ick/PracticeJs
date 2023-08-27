const mat = [
  [1,4,7,11,15],
  [2,5,8,12,19],
  [3,6,9,16,22],
  [10,13,14,17,24],
  [18,21,23,26,30],
]
// n - кол-во строк
// m - кол-во столбцов
// target = 9 (целевой показатель, требуется вхождение в матрицу) 
function matrix(target, mat) {
  let right = mat[0].length - 1
  // индекс строки в матрице
  let row = 0
  while (mat.length - 1 >= row && right >= 0) {
    if (mat[row][right] === target) {
      return  {
       column: right + 1,
        row: row + 1
      }
    }
    if (mat[row][right] > target) {
      right--
    } else {
      row++
    } 
  }
  return 
}

console.log(matrix(14, mat));