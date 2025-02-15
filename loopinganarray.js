for(let i=0;i<inputArr.length;i++){
    if (inputArr[i]>0){
        console.log("The number is positive.")}
    else if(inputArr[i]<0){
        console.log("The number is negative.")
    }
    else if(inputArr[i]===0){
        console.log("The number is zero.")
    }
    else if(typeof inputArr[i]!=Number){
        console.log("The element is not an integer.")
    }
    }