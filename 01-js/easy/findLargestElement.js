/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largestNumber = numbers[0];
    for (let index = 0; index < numbers.length; index++) {
        console.log(numbers[index]);
        if (numbers[index] > largestNumber) {
            largestNumber = numbers[index];
            console.log(largestNumber)
        }
    }
    return largestNumber;
}

module.exports = findLargestElement;
