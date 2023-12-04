// Largest Palindrome Product
// Find the largest palindrome made from the product of two 3-digit numbers

import { reverseStr } from "./helpers.js";

let maxPalindrome = 0;
for (let i = 999; i > 99; i--) {
	for (let j = 999; j > 99; j--) {
		const product = i * j;
		if (product === +reverseStr(String(product)) && product > maxPalindrome)
			maxPalindrome = product;
	}
}
console.log(maxPalindrome);
