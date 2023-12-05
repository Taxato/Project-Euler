import { Permutation } from "js-combinatorics";
import {
	triangle,
	square,
	pentagonal,
	hexagonal,
	heptagonal,
	octagonal,
} from "./helpers";

function isCyclic(set) {
	let res = true;
	for (let i = 0; i < set.length; i++) {
		if (
			String(set[i]).slice(0, 2) !==
			// String(set[(i - 1 + set.length) % set.length]).slice(2)
			(i === 0
				? String(set[set.length - 1]).slice(2)
				: String(set[i - 1]).slice(2))
		) {
			res = false;
			break;
		}
	}
	return res;
}

function possibleCyclic(set) {
	for (const num of set) {
		const matchStart = set.find(
			n => n !== num && num.slice(0, 2) === n.slice(2)
		);
		const matchEnd = set.find(
			n => n !== num && num.slice(2) === n.slice(0, 2)
		);

		if (!matchStart || !matchEnd) return false;
	}
	const permutations = new Permutation(set);
	for (const perm of permutations) {
		if (isCyclic(perm)) return true;
	}
	return false;
}

const triangles = new Set();
const squares = new Set();
const pentagonals = new Set();
const hexagonals = new Set();
const heptagonals = new Set();
const octagonals = new Set();

let i = 1;
while (true) {
	const t = triangle(i);
	const str = String(t);
	if (str.length === 4) triangles.add(t);
	else if (str.length > 4) break;
	i++;
}
i = 0;
while (true) {
	const s = square(i);
	const str = String(s);
	if (str.length === 4) squares.add(s);
	else if (str.length > 4) break;
	i++;
}
i = 0;
while (true) {
	const p = pentagonal(i);
	const str = String(p);
	if (str.length === 4) pentagonals.add(p);
	else if (str.length > 4) break;
	i++;
}
i = 0;
while (true) {
	const h = hexagonal(i);
	const str = String(h);
	if (str.length === 4) hexagonals.add(h);
	else if (str.length > 4) break;
	i++;
}
i = 0;
while (true) {
	const h = heptagonal(i);
	const str = String(h);
	if (str.length === 4) heptagonals.add(h);
	else if (str.length > 4) break;
	i++;
}
i = 0;
while (true) {
	const o = octagonal(i);
	const str = String(o);
	if (str.length === 4) octagonals.add(o);
	else if (str.length > 4) break;
	i++;
}

let figurates = [
	...triangles,
	...squares,
	...pentagonals,
	...hexagonals,
	...heptagonals,
	...octagonals,
].map(n => String(n));

const blackList = new Set();
function filterFigurates(set) {
	const whiteList = [...set]
		.map(t => String(t))
		.filter(fig => {
			const matchStart = figurates
				.filter(fig => !set.has(+fig))
				.find(
					f =>
						fig.slice(0, 2) === f.slice(2) &&
						!blackList.has(+f) &&
						fig !== f
				);
			const matchEnd = figurates
				.filter(fig => !set.has(+fig))
				.find(
					f =>
						fig.slice(2) === f.slice(0, 2) &&
						!blackList.has(+f) &&
						fig !== f
				);
			if (matchStart && matchEnd && matchStart !== matchEnd) return true;
		});
	[...set]
		.filter(f => !whiteList.includes(String(f)))
		.forEach(f => blackList.add(f));
	return whiteList;
}
let filteredTriangles = filterFigurates(triangles);
let filteredSquares = filterFigurates(squares);
let filteredPentagonals = filterFigurates(pentagonals);
let filteredHexagonals = filterFigurates(hexagonals);
let filteredHeptagonals = filterFigurates(heptagonals);
let filteredOctagonals = filterFigurates(octagonals);
filteredTriangles = filterFigurates(triangles);
filteredSquares = filterFigurates(squares);
filteredPentagonals = filterFigurates(pentagonals);
filteredHexagonals = filterFigurates(hexagonals);
filteredHeptagonals = filterFigurates(heptagonals);
filteredOctagonals = filterFigurates(octagonals);
filteredTriangles = filterFigurates(triangles);

console.log(triangles.size, filteredTriangles.length);
console.log(squares.size, filteredSquares.length);
console.log(pentagonals.size, filteredPentagonals.length);
console.log(hexagonals.size, filteredHexagonals.length);
console.log(heptagonals.size, filteredHeptagonals.length);
console.log(octagonals.size, filteredOctagonals.length);

main: for (const digit1 of [...filteredTriangles]) {
	for (const digit2 of [...filteredSquares]) {
		for (const digit3 of [...filteredPentagonals]) {
			const set = [digit1, digit2, digit3];

			if (possibleCyclic(set)) {
				console.log(set);
				break main;
			}
		}
	}
}

main: for (const digit1 of filteredTriangles) {
	for (const digit2 of filteredSquares) {
		for (const digit3 of filteredPentagonals) {
			for (const digit4 of filteredHexagonals) {
				for (const digit5 of filteredHeptagonals) {
					for (const digit6 of filteredOctagonals) {
						const set = [
							digit1,
							digit2,
							digit3,
							digit4,
							digit5,
							digit6,
						];

						if (possibleCyclic(set)) {
							console.log(set);
							break main;
						}
					}
				}
			}
		}
	}
}
