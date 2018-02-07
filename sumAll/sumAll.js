var sumAll = function(intOne, intTwo) {
    var ans = 0;

    if ((intOne < 0)  || (intTwo < 0)){
        return 'ERROR';
    }
    
    if ((typeof intOne === 'number')  && (typeof intTwo === 'number')){
        if (intOne > intTwo){
            var intHolder = intTwo;
            intTwo = intOne;
            intOne = intHolder;

            // console.log('intOne = ' + intOne);
            // console.log('intTwo = ' + intTwo);
            // console.log(typeof intTwo);
        }

        for (i = intOne; i <= intTwo; i++){
            ans += i;
        }

        return ans;

    } else{
        return 'ERROR';
    }

}

module.exports = sumAll
