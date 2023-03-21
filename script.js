
const w=new Worker("worker.js");
const sumButton=document.querySelector("#sumbutton");
const bgButton=document.querySelector("#bgbutton");

sumButton.addEventListener("click",(event)=>{
    w.postMessage("Hello");
});
w.onmessage=function(message){
    alert(`The final sum is: ${message.data}`);
}

bgButton.addEventListener("click",(event)=>{
    if(document.body.style.background!=="green")
       document.body.style.background="green";
    else
    document.body.style.background="blue";
});