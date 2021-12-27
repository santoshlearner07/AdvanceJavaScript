// Rest operators

function func(...input){
    let sum = 0;
    for(let i of input){
        sum += i
    }
    return sum;
}
console.log(func(1,2));
console.log(func(1,2,4));
console.log(func(1,2,5,7));



