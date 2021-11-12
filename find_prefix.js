let findPrefix = function(newArray){
    //arrayElements = newArray[i];
    let emptyString = '';
    for(i = 0; i < newArray.length; i++){
        for(j = 0; j < newArray[i].length; j++){
            firstChar = newArray[i][j];
            if(newArray[i][j] === newArray[i + 1][j]){
                j++;
                emptyString = emptyString + firstChar;
                console.log(emptyString);
            }else{
                console.log('');
            }

        }; 
    }
};

myArray = ['florida', 'flower', 'flour', 'flegel'];
findPrefix(myArray);