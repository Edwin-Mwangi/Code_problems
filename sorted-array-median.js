
arr1 = [1,2];
arr2 = [-3];

var findMedianSortedArrays = function(num1, num2) {
    
    num3 = num1.concat(num2);
    //num3.sort();

    num3.sort((a,b) => {
        if(b > a){
            return -1;
        }else if(a > b){
            return 1;
        }else{
            return 0;
        }
    });
    
    console.log(num3);

    //for odd no's
     //for odd no's
     if(num3.length % 2 !== 0){
        let half = Math.floor(num3.length / 2);
        return num3[half];
    }else{
        half = num3.length / 2;
        let smallerOfTheTwo = half-1;
        return (num3[half] + num3[smallerOfTheTwo])/2;
    };
    
};

findMedianSortedArrays(arr1, arr2);

num3.sort((a,b) => {a-b});