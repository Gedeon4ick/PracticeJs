function factorial(n) {
  //база рекурсии - случай выхода из рекурсивного сценария
  if(n===1) {
    return 1
    // рекурсивный случай
  } else {
    return n * factorial(n-1) 
  }
}

function fac(n) {
  return n === 1? 1 : n * fac (n-1)
}

console.log(fac(6));


// числа фибоначчи

function fibonacci(n) {
  if (n<=1) {
    return n 
  } else {
    return  fibonacci(n-1) + fibonacci(n-2)
      // f(6) = f(5) + f(4) = 5 + 3 = 8
      // f(5) = f(4) + f(3) = 3 + 2 = 5
      // f(4) = f(3) + f(2) = 2 + 1 = 3
      // f(3) = f(2) + f(1) = 1 + 1 = 2
      // f(2) = f(1) + f(0) = 1
  }
}

console.log(fibonacci(6));

// function f(n) {
//   if (n <= 1) {
//       return n
//   }
//   else {
//       return f(n-1) + f(n-2)
//       // f(5) = f(4) + f(3)
//       // f(4) = f(3) + f(2) = f(2) + f(1) + f(2) = 2 * f(2) + f(1) = 2 * f(2) + 1 = 2 * (f(1) + f(0)) + 1 = 3
//       // f(3) = f(2) + f(1) = f(1) + f(0) + f(1) = 2
//       // f(5) = 3 + 2 = 5   
//   }
// }

// последовательность фибоначчи 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 