// int is an integer
// 🤨 --> a factorial is the product of all non-negative integers 
// less than or equal to the inital number. <-- 😶

//The factorial of a number is the product of all the integers from 1 to that number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

function factorial(int) {
    if (int === 0 || int === 1)
    return 1;
  for (let i = int - 1; i >= 1; i--) {
    int *= i;
  }
  return int;  
}

module.exports = factorial;
