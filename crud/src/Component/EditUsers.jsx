import React, { useState,useEffect } from 'react'
import axios from 'axios'
import design from "./home.module.css"
import { useNavigate, useParams } from 'react-router-dom'
const EditUsers = () => {
    let [name,setName]=useState()
    let [sal,setSal]=useState()
    let [comp,setComp]=useState()

    let navigate=useNavigate()
    let {index}=useParams()

    useEffect(()=>{
        axios.get(` http://localhost:3000/users/${index}`)
    .then((response)=>{
        console.log("Got the data");
        setName(response.data.name)
        setSal(response.data.sal)
        setComp(response.data.comp)
    })
    .catch(()=>{
        console.log("Did not get the data");
    })
    },[])

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
         axios.put(`http://localhost:3000/user/${index}`,post)
         .then(()=>{
          console.log("Data got");
         })
         .catch(()=>{
          console.log("Something went wrong");
         })
         navigate("/read")
             }
  return (
    <div id={design.div}>
        <section>
        <label htmlFor="">Name : </label>
        <input type="text" onChange={nameData} value={name}/><br />
        <label htmlFor="">Salary : </label>
        <input type="text" onChange={salData} value={sal}/><br />
        <label htmlFor="">Company : </label>
        <input type="text" onChange={compData} value={comp}/><br />
        <button onClick={submit}>Submit</button>
       </section>
    </div>
  )
}

export default EditUsers