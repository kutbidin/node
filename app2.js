const arr=['a',2,'b',3];
const f=(x)=>{
    return x>1;
}
console.log(`array:${arr}`);
console.log(`array filtered with  function ${f.toString()}`)
let arrFiltered=arr.filter(f);
console.log(`after filter :${arrFiltered}`);
arrFiltered=arrFiltered.map(elm=>elm+5);
console.log(arrFiltered);

// array find method
console.log(arr.find(elm=>elm>2));
// array at method 
console.log(arr.at(0));
// array fill method
let arr1=new Array(7);
for(var i=0;i<7;i++){
    arr1.fill(i,i,i+1);
}
console.log(arr1);