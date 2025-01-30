const palindromes = function (str) {
    let cleanedString=str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversedString=cleanedString.split("").reverse().join("");
    return cleanedString===reversedString;
};

// Do not edit below this line
module.exports = palindromes;
