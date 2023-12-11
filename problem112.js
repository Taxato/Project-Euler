const isBouncy = n => {
	const arr = String(n).split("").map(Number);
	const increasing = arr.slice(1).every((val, i) => val >= arr[i]);
	const decreasing = arr.slice(1).every((val, i) => val <= arr[i]);
	return !(increasing || decreasing);
};

let i = 1;
let bouncyRatio = 0;
while (true) {
	let prevBounceRatio = bouncyRatio;
	bouncyRatio = proportionBouncy(bouncyRatio, i);
	if (bouncyRatio > 0.99) {
		console.log(bouncyRatio - prevBounceRatio);
		break;
	}
	i++;
}

console.log(i, bouncyRatio);

function proportionBouncy(oldRatio, i) {
	return oldRatio + ((isBouncy(i) ? 1 : 0) - oldRatio) / i;
}
