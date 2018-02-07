function add (first, second) {
	return first + second;
}

function subtract (first, second) {
	return first - second;
}

function sum (arr) {
	//console.log(arr)
	return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function multiply (arr) {
	return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
}

function power(first, second) {
	return first ** second;
}

function factorial(factor) {
	if( factor == 0 || factor == 1){
		return 1;
	} else {
		ans = factor;
		for (index = factor - 1; index >= 1; index--){
			ans *= index;
			//console.log(ans);
		}

		return ans;
	}

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}