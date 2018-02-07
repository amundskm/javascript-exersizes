function echo(simon) {
	return simon;
}

function shout(simon) {
	return simon.toUpperCase();
}

function repeat() {
	str = arguments[0];
	count = arguments[1];
	//console.log(count);
	var ans = '';
	if (count === undefined){
		ans = str + ' ' + str;
		//console.log(ans);
		return ans;
	} else{
	for ( index = 0; index < count - 1; index++){
		ans += str + ' ';
	}
		ans += str
	}
	return ans;
}

function pieceOfWord() {
	str = arguments[0];
	peices = arguments[1];

	return str.substring(0,peices);
	
}

function firstWord(str) {
	ans  = str.split(" ");
	return ans[0];
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}


function titleCreator(str) {
	newStr = str.split(" ");
	//console.log(newStr);
	littleWord = ['and', 'of', 'over', 'the']
	for (index = 0; index < newStr.length; index++){
		if (index === 0){
			//console.log(newStr[index]);
			//console.log(index);
			newStr[index] = capitalize(newStr[index]);
		}else if ( littleWord.indexOf(newStr[index]) === -1 ){
			//console.log(newStr[index]);
			//console.log(index);
			newStr[index] = capitalize(newStr[index]);
		}
	}

	return newStr.join(' ');
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}