import { Permutation } from "js-combinatorics";
import _ from "lodash";
import {
	heptagonal,
	hexagonal,
	octagonal,
	pentagonal,
	square,
	triangle,
} from "./helpers.js";

function* genTriangles() {
	let i = 1;
	while (true) {
		yield triangle(i);
		i++;
	}
}
function* genSquares() {
	let i = 1;
	while (true) {
		yield square(i);
		i++;
	}
}
function* genPentagonals() {
	let i = 1;
	while (true) {
		yield pentagonal(i);
		i++;
	}
}
function* genHexagonals() {
	let i = 1;
	while (true) {
		yield hexagonal(i);
		i++;
	}
}
function* genHeptagonals() {
	let i = 1;
	while (true) {
		yield heptagonal(i);
		i++;
	}
}
function* genOctagonals() {
	let i = 1;
	while (true) {
		yield octagonal(i);
		i++;
	}
}

function genNumbers(iter) {
	const res = [];
	for (const n of iter) {
		if (n >= 10000) break;
		if (n >= 1000) res.push(n);
	}
	return res;
}

function splitNumbers(nums) {
	const result = {};
	for (const num of nums) {
		const str = String(num);

		const prefix = str.slice(0, 2);
		const suffix = str.slice(2);

		if (!(prefix in result)) result[prefix] = [];
		result[prefix].push(suffix);
	}
	return result;
}

function recursion(setSoFar, splits) {
	const prefix = setSoFar.at(-1).slice(2);
	if (splits.length) {
		const candidates = splits[0]?.[prefix] ? splits[0][prefix] : [];
		for (const candidate of candidates) {
			setSoFar.push(prefix + candidate);
			const result = recursion(setSoFar, splits.slice(1));
			if (result) return result;
			setSoFar.pop();
		}
	} else {
		if (prefix === setSoFar[0].slice(0, 2)) return setSoFar;
	}
}

function solution() {
	const allNumbers = [];
	for (const iter of [
		genTriangles(),
		genSquares(),
		genPentagonals(),
		genHexagonals(),
		genHeptagonals(),
		genOctagonals(),
	]) {
		allNumbers.push(genNumbers(iter));
	}

	const splits = allNumbers.map(n => splitNumbers(n));

	for (const s of new Permutation(splits.slice(1))) {
		for (const [prefix, suffixes] of Object.entries(splits[0])) {
			for (const suffix of suffixes) {
				const result = recursion([prefix + suffix], s);
				if (result) {
					console.log(result.map(Number));
					return _.sum(result.map(Number));
				}
			}
		}
	}
}

console.log(solution());
