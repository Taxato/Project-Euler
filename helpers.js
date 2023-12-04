export function isPrime(num) {
	let prime = true;
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			prime = false;
			break;
		}
	}
	return prime;
}

export function reverseStr(str) {
	let res = "";
	for (let i = str.length - 1; i >= 0; i--) {
		res += str.at(i);
	}
	return res;
}
