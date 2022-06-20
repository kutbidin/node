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