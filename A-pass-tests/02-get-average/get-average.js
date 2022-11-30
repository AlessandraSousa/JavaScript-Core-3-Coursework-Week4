// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    filtererdNumbers = [];
    numbers.filter((element) => {
      if (typeof element === "number") {
        filtererdNumbers.push(element);
      }
    });
    let sum = 0;
    filtererdNumbers.forEach((num) => {
      sum += num;
    });
    return (sum / filtererdNumbers.length);
  }

module.exports = average;
