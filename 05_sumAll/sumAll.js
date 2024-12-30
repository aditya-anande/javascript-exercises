const sumAll = function(start,end) {
    if(start<0 || end<0) return "ERROR";
    if(!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if(start>end) {
        const temp=start; //start value in temp
        start=end; //end value in start
        end=temp; //start value in end  
    }
    let sum=0;
    for(let i=start;i<=end;i++) {
        sum=sum+i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
