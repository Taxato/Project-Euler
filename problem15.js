import { factorial } from "js-combinatorics";

function centralBinomialCoefficient(n) {
	const nFac = factorial(n);
	return factorial(2 * n) / (nFac * nFac);
}

console.log(centralBinomialCoefficient(20));
