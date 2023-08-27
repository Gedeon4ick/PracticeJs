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

// Числа Трибоначчи образуют последовательность, в которой каждое число равно сумме трех предыдущих чисел: 0, 0, 1, 1, 2, 4, 7 и так далее. Написать функцию вычисления

function retIndexNumbTr(index) {
  if(index === 0 || index === 1) {
    return 0
  } else if (index===2) {
    return 1
  } else {
    return retIndexNumbTr(index - 1) + retIndexNumbTr(index - 2) + retIndexNumbTr(index - 3)
  }
}



// f(6) = f(5)+f(4)+f(3) = 7
//f(5) = f(4)+f(3)+f(2) = 4
//f(4) = f(3)+f(2)+f(1) = 2
//f(3) = f(2)+f(1)+f(0) = 1
//f(2) = 1
//f(1)= 0
//f(0)=0


// 2 задача
// Числа Пелла - это последовательность, в которой каждое число определяется по формуле: P(n) = 2 * P(n - 1) + P(n - 2), где P(0) = 0 и P(1) = 1.
// 0, 1, 2, 5, 12, 29, 70

function retNumbIndex(index) {
  if(index===0){
    return 0
  } else if (index === 1){
    return 1
  } else { 
    return 2*retNumbIndex(index-1) + retNumbIndex(index-2)
  }
}

console.log(retNumbIndex(5));

//f(5) = 2*f(4) + f(3)= 24+5=29
//f(4)= 2*f(3)+f(2)= 10+2=12
//f(3)= 2*f(2)+f(1)=1+4=5
//f(2)=2*f(1)+ f(0)=2

//сумм 2 предыдущих деленная 3, 0,1,

function retIn(index) {
 if(index === 0 ) {
  return 0
 }  else if(index===1) {
  return 1
 } else {
  return Math.floor((retIn(index-1)+retIn(index-2))*3)
 }
}

console.log(retIn(7));