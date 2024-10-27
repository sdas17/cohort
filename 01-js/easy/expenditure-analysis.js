/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
const transactions = [
  { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656259600000, price: 20, category: 'Food', itemName: 'Burger' },
  { id: 3, timestamp: 1656019200000, price: 15, category: 'Clothing', itemName: 'T-Shirt' },
  { id: 4, timestamp: 1656364800000, price: 30, category: 'Electronics', itemName: 'Headphones' },
  { id: 5, timestamp: 1656105600000, price: 25, category: 'Clothing', itemName: 'Jeans' },
];

// function calculateTotalSpentByCategory(transactions) {
//   const totalSpentByCategory = {};

//   transactions.forEach(element => {
//     const { price, category } = element;

//     if (totalSpentByCategory[category]) {
//       totalSpentByCategory[category] += price;
//     } else {
//       totalSpentByCategory[category] = price;
//     }
//   });

//   // Convert the object to an array of { category, totalSpent } objects
//   return  totalSpentByCategory;
// }

// const result = calculateTotalSpentByCategory(transactions);
// console.log(result);
let count ={}
function sampledata (transactions){
  transactions.map((data)=>{
    let {category}=data;
    if (count[category]) {
      count[category]+=1;
    }else{
      count[category]=1;

    }
  })
  return count;
}
let data=sampledata(transactions);
console.log(data)