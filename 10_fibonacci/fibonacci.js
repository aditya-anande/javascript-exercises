const fibonacci = function(n) {

let num;
if(typeof n!== "number"){
    num=parseInt(n);
} else {
    num=n;
}

if(num<0) return("OOPS"); //No negative allowed
if(num===0) return(0);

let a=0,b=1;
for(let i=2;i<=n;i++) {
    let temp=a+b;
    a=b;
    b=temp;
}
return b;
};

// Do not edit below this line
module.exports = fibonacci;
