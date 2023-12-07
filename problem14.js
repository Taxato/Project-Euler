import { isEven } from "./helpers.js";

const collatsMemo = {};
let longestChain = { start: null, length: 0 };

for (let i = 0; i < 1e6; i++) {
	const len = collatsSequence(i, collatsMemo);
	if (len > longestChain.length) longestChain = { start: i, length: len };
}

console.log(longestChain);
// console.log(collatsMemo);

function collatsSequence(num, memo = {}) {
	if (num < 2) return 0;
	if (num in memo) return memo[num];

	const newNum = isEven(num) ? num / 2 : num * 3 + 1;

	memo[num] = collatsSequence(newNum, memo) + 1;

	return memo[num];
}
