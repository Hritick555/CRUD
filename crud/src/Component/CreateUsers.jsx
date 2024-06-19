import React, { useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateUsers = () => {

    let [name,setName]=useState("")
    let [sal,setSal]=useState("")
    let [comp,setComp]=useState("")
    let navigate =useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
        console.log(e.target.value);
    }
    let salData=(e)=>{
        setSal(e.target.value)
        console.log(e.target.value);
    }
    let compData=(e)=>{
        setComp(e.target.value)
        console.log(e.target.value);
    }

    let submit=()=>{
      let post={name,sal,comp}
       axios.post(`http://localhost:3000/users`,post)
       .then(()=>{
        console.log("Data got");
       })
       .catch(()=>{
        console.log("Something went wrong");
       })
       navigate("/read")
    }
    
  return (

    <div id={style.form}>
       <article>
        <label htmlFor="">Name : </label>
        <input type="text" onChange={nameData}/><br />
        <label htmlFor="">Salary : </label>
        <input type="text" onChange={salData}/><br />
        <label htmlFor="">Company : </label>
        <input type="text" onChange={compData}/><br />
        <button onClick={submit}>Submit</button>
       </article>
    </div>
  )
}

export default CreateUsers