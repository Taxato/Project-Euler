// Highly Divisible Triangular Number
// What is the value of the first triangle number to have over five hundred divisors

function numDivisors(num) {
	let total = 2;
	for (let i = 2; i < Math.sqrt(num); i++) {
		if (num % i === 0) total += 2;
	}
	if (Number.isInteger(Math.sqrt(num))) total++;
	return total;
}

let i = 1;
let triangle = 0;
while (true) {
	triangle += i;
	if (numDivisors(triangle) > 500) {
		console.log(triangle);
		break;
	}
	i++;
}
