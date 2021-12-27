// function sayHi(){
//     console.log('Hello');
// }

let timerId = setInterval(() => {
    console.log('tick')
}, 2000);

setTimeout(()=>{
    clearInterval(timerId);
    console.log('stop')
},5000)
