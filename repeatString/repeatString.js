var repeatString = function(repeatingString, timesRepeated) {
    returnStatement = '';

    if (timesRepeated < 0){
        return 'ERROR';
    }
    else{
        for (repeatIndex = 0; repeatIndex <timesRepeated; repeatIndex++){
            returnStatement += repeatingString;
        }
            return returnStatement;
    }
}

module.exports = repeatString
