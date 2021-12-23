
const datas = [
    {name:"Ajay",Job:"Soft Engg"},
    {name:"Anuj",Job:"Soft engg"}
]

function getDatas(){
    setTimeout(()=>{
        let output = "";
        datas.forEach((data,index)=>{
            output+=`<li>${data.name}</li>`;
        })
        document.body.innerHTML=output
    }, 3000);
}

function createData(newdata){
    setTimeout(()=>{
        datas.push(newdata)
    },2000);
}

getDatas();
createData({name:"Vivek",Job:"Soft Engg"})