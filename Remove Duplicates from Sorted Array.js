var removeDuplicates = function(nums) {
    nums.sort( (a,b) => a.score - b.score);
    newArray = [];

    for(i=0;i<nums.length;i++){
        if(nums[i] !== nums[i+1]){
            newArray.push(nums[i]);
        }   
    }
    console.log(newArray);
    
};

nums = [1,1,2]
removeDuplicates(nums);

/* sort the array
(i) check if numbers are equal to each other if they are then bring to from the next unequal no 
if not move o the next acending no and repeat (i)*/