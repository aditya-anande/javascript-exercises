const repeatString = function(string,n) {
let repeatedString="";
if(n<0) {
    return "ERROR";
}
while(n>0) {
    repeatedString += string;
    n--;
}
return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;