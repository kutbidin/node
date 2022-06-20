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