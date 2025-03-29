let hrs=document.querySelector("#hrs");
let mins=document.querySelector("#mins");
let sec=document.querySelector("#sec");

setInterval(()=>{
    let currentTime=new Date();
    let hour=currentTime.getHours()-12;
    hrs.innerHTML=hour;
    mins.innerHTML=currentTime.getMinutes();
    sec.innerHTML=currentTime.getSeconds();
},1000);

// console.log(currentTime);