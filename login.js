import { json } from "express";

let input1=document.getElementById("input1");
let input2=document.getElementById("input2");
let btn1= document.getElementById("btn1")
btn1.addEventListener("click",()=>{
    let a= input1.value
   let b= input2.value 
   fetch('http://localhost:4000/signinuser',{
     method:"post",
    headers:{
       "Content-Type":"application/json"
    },
     body:JSON.stringify({
        userid: a,
        password: b
     
    })

   })
   .then((response)=>
    response.json()

   )
   .then((data)=>{
    console.log(data)
   })
})

