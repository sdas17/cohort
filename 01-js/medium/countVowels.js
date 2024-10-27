// /*
//   Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
//   Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

//   Once you've implemented the logic, test your code by running
// */

// function countalphabel(str) {
//   let data ={}
// // let vowels =['a','e','i','o','u'];
// // let count=0;
// // for(let i = 0; i < vowels.length; i++){
// //   for(let j = 0; j < str.length; j++){
// //        if (vowels[i] == str[j]) {
// //         count+=1;
// //        }
// //   }
// // }
// // return count
// for(let j = 0; j < str.length; j++){
//   const char = str[j].toLowerCase();
//   if (data[char]) {
//     str[j]+=1;
//   }else{
//     str[j]=1
//   }
// }
// return data;

// }    


// let d=countalphabel("subhams");
// console.log(d)
function countAlphabet(str) {
  let data = {};

  // Loop through each character in the input string
  for (let j = 0; j < str.length; j++) {
    const char = str[j].toLowerCase(); // Convert to lowercase for case insensitivity

    // Check if the character is already in the data object
    if (data[char]) {
      data[char] += 1; // Increment the count for that character
    } else {
      data[char] = 1; // Initialize the count for that character
    }
  }
  
  return data; // Return the object with character counts
}

// Testing the function
let d = countAlphabet("subhams");
console.log(d); // Output the counts of each character
