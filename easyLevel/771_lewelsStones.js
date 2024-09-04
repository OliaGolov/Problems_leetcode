const jewels = "ZZa",
  stones = "zAa";

const jewelArr = jewels.split("");
const stoneArr = stones.split("");

let sum = stoneArr.reduce((acc, item) => {
  if (jewelArr.includes(item)) {
    acc = acc + 1;
  }
  return acc;
}, 0);
console.log(sum);
