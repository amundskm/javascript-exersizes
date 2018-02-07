var removeFromArray = function(...args) {
    const array = args[0];

    for (argsIndex = 1; argsIndex = args.length-1; argsIndex++){
        if (array.includes(args[argsIndex]) == true){
                //index = array.indexOf(args[argsIndex]);
                //array.splice(index, 1);
        }
    }
        return array;

}

module.exports = removeFromArray
