// Smallest Multiple
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

let i = 0;
let valid;
do {
	i++;
	valid = true;
	for (let j = 1; j <= 20; j++) {
		if (i % j !== 0) valid = false;
	}
} while (!valid);
console.log(i);

// 2*3*5*7*11*13*17*19=9699690
// 1,2,3,5,6,7,10,11,13,14,15,17,19
// not divisible by 4,8,9,12,16,18,20
// needed additions are 8 and 3
// 2  - 2
// 3  - 3
// 4  - 2*2
// 5  - 5
// 6  - 2*3
// 7  - 7
// 8  - 8
// 9  - 3*3
// 10 - 2*5
// 11 - 11
// 12 - 2*6
// 13 - 13
// 14 - 2*7
// 15 - 2*5
// 16 - 2*8
// 17 - 17
// 18 - 2*3*3
// 19 - 19
// 20 - 2*2*5
// 2*3*3*5*7*8*11*13*17*19=232792560
