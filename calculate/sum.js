console.log("sum module");

var x = "hello";

function calculateSum(a,b) {
    const sum = a + b;
    console.log(sum);
    
};

module.exports = { x, calculateSum }