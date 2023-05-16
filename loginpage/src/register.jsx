import React, { useState } from "react";
import "./register.css"

 const Register=()=>{
    const [userid,stateuserid]=useState("");
    const[password,statepassword]=useState("")
    const[bookno,statebookno]=useState()
    const[bookid,statebookid]=useState("")


     const useridchange = (e)=>{
        stateuserid(e.target.value)

     }

const passwordchange = (e)=>{
    statepassword(e.target.value)
}

const booknochange = (e)=>{
    statebookno(e.target.value)
}

const bookidchange = (e)=>{
    statebookid(e.target.value)
}

const buttonclick = async(e)=>{
    e.preventDefault()
    console.log(userid)
    console.log(password);
    console.log(bookno);
    console.log(bookid);
    
        const a =await fetch("/adduser",{
            method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "userid":userid,
            "password":password,
            "Bookno":bookno,
            "Bookname":bookid
        })

        })
        console.log("okkkkkk")
        const data = await a.json()
        console.log(data)
if(data.messege){
    alert(data.messege)

}else{
    alert(data.err)
}

}
return(
   <>
    <form>
        <h1>LIBRARY DATABASE</h1>
    
    <input type="text" placeholder="Enter the id" name="userid" onChange={useridchange}/>
    <input type="text" placeholder="Enter the password" name="password" onChange={passwordchange}/>
    <input type="text" placeholder="Enter the Book no" name="userid" onChange={booknochange}/>
    <input type="text" placeholder="Enter the Bookid" name="password" onChange={bookidchange}/>
    <button onClick={buttonclick}>SUBMIT</button>
    </form>
   </>
)
}
export default Register;
