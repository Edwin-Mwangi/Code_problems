var removeDuplicates = function(nums) {
    nums.sort( (a,b) => a.score - b.score);
    newArray = [];

    for(i=0;i<nums.length;i++){
        for(n=1;n<nums.length;n++){
            if(nums[i] !== nums[i+n]){
                newArray.push(nums[i]);
            }
        }     
    }
    console.log(newArray);
    
};

nums = [1,1,2,2,4,5,6,6,7,7,8,9,10]
removeDuplicates(nums);

/* sort the array
(i) check if numbers are equal to each other if they are then bring to from the next unequal no 
if not move o the next acending no and repeat (i)*/