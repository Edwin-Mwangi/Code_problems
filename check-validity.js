// function checkVlidity(str){
//     punctuationArray = [ ['()','{}','[]'], [`""`,`''`] , [`,`]];
//     for(i=0;i<3;i++){
//         for(j=0;j<punctuationArray[i].length;j++){
        
// val += punctuationArray[i][j];
// val2 = punctuationArray[i][j];
// if(str === val){
//     console.log('this is valid')}

// else if(i < 2 && str === (val2[0] + val2 + val2[1])) {
//     console.log('this is also valid');
// };
// else{
//     console.log('This is invalid')
// };
// };
 
//     };
// };
// checkValidity('');

//practise code done ....not correct though
function checkValidity1(str){
    punctuationArray = [ ['()','{}','[]'], [`""`,`''`] , [`,`]];
    for(i=0;i<3;i++){
        for(j=0;j<punctuationArray[i].length;j++){
            val = '';
            val += punctuationArray[i][j];
            val2 = punctuationArray[i][j];
            if(str === val || (i < 2 && str === (val2[0] + val2 + val2[1]))){
                console.log('this is valid')
            }
            else{
                console.log('this is invalid');
            };
            };

                };
        };   
checkValidity('"(,)"');

function checkValidity2(str){
    punctuationArray = ['()','{}','[]'];
    for(i=0;i<3;i++){
        val = '';
        val += punctuationArray[i];
        nextVal = punctuationArray[i];
        if(str === val){
            console.log('this is valid');
        }
        if(nextVal[0] + nextVal + nextVal[1]){
            console.log('this is also valid')
        }else{
            console.log('this is invalid')
        }
    };
};

// checkValidity('()[]{}');

// function convert(s, numRows){
//     let myArray = new Array();
//         myArray[i] = [];
//     for(a = 0; a < s.length; a++){
//         stringChar = s[a];//the string increments

//         //for the first vertical
//         for(i = 0; i < numRows; i++){
//             //define j
//             stringChar = myArray[i][j];
//         }
//         //for the diagonal
//         for(i = numRows; i > 0; i--){
//             j = (numRows + 1);
//             j = j - 1;

//         }

//     }
// };

