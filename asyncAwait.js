// async function callingAsync(){
//     return true
// }
// console.log(callingAsync());

console.log("Before Promise...")
let myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Executed...');
    },1000);
})
console.log("After Promise")

console.log("Before Async")
async function callingPromise(){
    await myPromise.then((data)=>{
        console.log(data);
    })
    console.log('Execution completed')
}

console.log("After Async")
callingPromise();

