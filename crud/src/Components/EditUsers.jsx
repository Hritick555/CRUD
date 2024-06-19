import style from "./home.module.css"
import { useState } from "react"

const EditUsers=()=>{
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    return(
        <div>
<div id={style.myform}>
            <article>
                <h1>Update Users :</h1>
                <label htmlFor="">Name :</label>
                <input type="text" value={name} />
                <label htmlFor="">Salary :</label>
                <input type="text" value={salary}/>
                <label htmlFor="">Company :</label>
                <input type="text" value={company} />
                <button >Submit</button>
            </article>

        </div>
        </div>
    )
}

export default EditUsers