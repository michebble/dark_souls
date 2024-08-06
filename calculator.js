export function makeChange(coins, targetAmount) {
  if (targetAmount <= 0) {
    return [];
  }

  const dp = Array(targetAmount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= targetAmount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j].value <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j].value] + 1);
      }
    }
  }

  const result = [];
  let amount = targetAmount;
  for (let i = coins.length - 1; i >= 0; i--) {
    while (amount >= coins[i].value && coins[i].count > 0) {
      let coinIndex = result.findIndex(coin => coin.name === coins[i].name);
      if (coinIndex !== -1) {
        result[coinIndex].count++;
      } else {
        result.push({ value: coins[i].value, count: 1, name: coins[i].name });
      }
      amount -= coins[i].value;
      coins[i].count--;
    }
  }

  return result;
}
