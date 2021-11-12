const longestSubStr = (fullStr) =>{
    subStr = "";
    for(i=0;i<fullStr.length;i++){
        if(!subStr.includes(fullStr[i])){
            subStr += fullStr[i];
        }else{
            subStr = '';
            subStr += fullStr[i];
        }
    }
    return subStr.length;
};

longestSubStr("irungu");