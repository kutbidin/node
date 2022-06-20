// this is closure
const makeAdder=(num1)=>{
    return addNum=(num2)=>{
        return num1+num2;
    }
}
// here adder is a function that holds makeAdder function with num1=2
// and takes a parameter num2
var adder=makeAdder(2);
console.log(`result:${adder(3)}`);

// function with unknow parameters 
function addNumers(){
    let sum=0;
    let args=[...arguments];
    console.log(args.length);
    args.forEach(param => {
        sum+=param;
    });
    return sum;
}
console.log(addNumers(1,2,3));