import { useState } from "react"

import axios from "axios"
import { useNavigate } from "react-router-dom"
const CreateWeb=()=>{
    let[name,setName]=useState("")
    let[age,setAge]=useState("")

    let navigate=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value);
    }
    let ageData=(e)=>{
        setAge(e.target.value);
    }
     let formHandle=(e)=>{
       let pay={name,age}
        axios.post("http://localhost:3000/users",pay)
        .then(()=>{
            console.log("Data uploaded");
        })
        .catch(()=>{
        console.log("something went wrong")
        })
        navigate("/Webpage")


 }
    return(
        <div>
                        <form action="" >            
            <label htmlFor="">Name</label>
             <input type="text" value={name} onChange={nameData} />
             <label htmlFor="">age</label>
             <input type="text" value={age} onChange={ageData}/>
             <button onClick={formHandle} >submit</button>
             </form>

        </div>
    )
}

export default CreateWeb