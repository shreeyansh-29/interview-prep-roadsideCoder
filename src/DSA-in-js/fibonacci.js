// Ques 2 - Fibonacci Number
//F(0) = 0, F(1) = 1
//F(n) = F(n-1) + F(n-2), for n > 1

const Fibonacci = function (n) {
  //Iteration
  //   let arr = [0, 1];
  //   for (let i = 2; i <= n; i++) {
  //     arr.push(arr[i - 1] + arr[i - 2]);
  //   }
  //   return arr[n];

  //Recursion
  if (n <= 1) return n;
  else return Fibonacci(n - 1) + Fibonacci(n - 2);
};

const result = Fibonacci(2);
console.log(result);
