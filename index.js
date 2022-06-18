
/*
function hasTargetSum(array, target) {
  // Write your algorithm here
  //create an object to keep track of numbers
  const seenNumbers = {};
  for(let i = 0; i <array.lenth; i++){
//for the current num,identify a complement that adds to the target(comp = target - num)
  const complement = target - array[i];
  //check if any key on our objcet is the complement
  //if so return true
  if(seenNumbers[complement]) return true;
  //otherwise add that number to an object
  seenNumbers[array[i]] = true;
  }
*/

function hasTargetSum(array, target) {
  // Write your algorithm here

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  return false;
}



/* 
  Write the Big O time complexity of your function here
   Runtime: 0(n^2)
   Space:0(n)

   when;
// O(n) runtime
function findSock(array) {
  for (const item of array) {
    if (item === "sock") return "sock";
  }
}
// O(1) runtime
function findSock(object) {
  if (object.sock) return "sock";
}

  */

/* 
Add your pseudocode here

create an object to keep track of all numbers we've seen
hasTargetSum([22, 19, 4, 6, 30], 25));
seenNumbers ={
22;true,
19;true,
4;true,
6;true
}



1.iterate through each number in the array
2.for the current num,identify a complement that adds to the target
3.iterate through the rest of the array 
4.check if any number is our complement
5.if so, return true
6.if i reach the end of the array return false.
*/
/*
  Add written explanation of your solution here
 1.Make a function hasTargetSum that checks if two numbers from the array add up to some target.
  2.for each number check id there'S a number that adds up to the target
  3.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;

