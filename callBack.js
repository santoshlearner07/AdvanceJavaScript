// console.log("This is Callback function");

// let x =function(){
//     console.log("I am called from inside a function")
// };

// let y = function(Callback){
//     console.log('do Something')
//     Callback();
// }

// y(x);

let add = function(a,b){
    return a+b;
}

let multiply  = function(a,b){
    return a*b;
}

let calc = function(num1,num2,Callback){
    return Callback(num1,num2);
}

console.log(calc(2,3,multiply));
console.log(calc(3,5,add));

