// coins is a list of coin objects, each with a value, name, and available count
// targetAmount is the amount of money to make change for
// a coin looks like this: { value: 200, count: 2, name: 'Soul of a Lost Undead'}
// the list of coins looks like this [{ value: 200, count: 2, name: 'Soul of a Lost Undead'}, { value: 400, count: 3, name: 'Large Soul of a Lost Undead'}]
// the function returns a list of coin objects that make up the targetAmount
// if the targetAmount cannot be reached with the coins given, the function returns an empty list
// if the targetAmount is 0, the function returns an empty list
// if the targetAmount is negative, the function returns an empty list
//
// Example 1:
// coins = [{ value: 200, count: 2, name: 'Soul of a Lost Undead'}, { value: 400, count: 3, name: 'Large Soul of a Lost Undead'}, , { value: 800, count: 8, name: 'Soul of a Nameless Soldier'}]
// targetAmount = 1000
// expected output (order is not important): [{ value: 400, count: 2, name: 'Large Soul of a Lost Undead'}, { value: 200, count: 1, name: 'Soul of a Lost Undead'}]
// Example 2:
// coins = [{ value: 200, count: 2, name: 'Soul of a Lost Undead'}, { value: 400, count: 3, name: 'Large Soul of a Lost Undead'}, { value: 800, count: 8, name: 'Soul of a Nameless Soldier'}];
// targetAmount = 900
// expected output (order is not important): [{ value: 800, count: 1, name: 'Soul of a Nameless Soldier'}, { value: 200, count: 1, name: 'Soul of a Lost Undead'}]



// export function makeChange(coins, targetAmount) {
//   // Check if targetAmount is 0 or negative
//   if (targetAmount <= 0) {
//     return [];
//   }

//   // Sort coins in descending order based on value
//   coins.sort((a, b) => b.value - a.value);

//   // Initialize an empty result array
//   const result = [];

//   // Iterate through each coin
//   for (let i = 0; i < coins.length; i++) {
//     const coin = coins[i];

//     // Check if coin is available and its value is less than or equal to targetAmount
//     if (coin.count > 0 && coin.value <= targetAmount) {
//       // Calculate the maximum number of this coin that can be used
//       const maxCount = Math.min(Math.floor(targetAmount / coin.value), coin.count);

//       // Add the coin to the result array
//       result.push({ value: coin.value, count: maxCount, name: coin.name });

//       // Update targetAmount and coin count
//       targetAmount -= coin.value * maxCount;
//       coin.count -= maxCount;
//     }
//   }

//   // Check if targetAmount is reduced to 0
//   if (targetAmount === 0) {
//     return result;
//   } else {
//     return [];
//   }
// }
