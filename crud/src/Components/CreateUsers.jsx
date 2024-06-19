import { useEffect, useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

// const CreateUsers=()=>{
//     let[name,setName]=useState("")
//     let[salary,setSalary]=useState("")
//     let[company,setCompany]=useState("")

//     let nameData=(e)=>{
//         setName(e.target.value)
//     }
//     let salaryData=(e)=>{
//         setSalary(e.target.value)
//     }
//     let companyData=(e)=>{
//         setCompany(e.target.value)
//     }
//     let formHandle=()=>{
//         let payload={name,salary,company}
//         axios.post("http://localhost:3000/users",payload)
//         .then(()=>{
//             console.log("Data has uploaded");
//         })
//         .catch(()=>{
//             console.log("Something went wrong");
//         })
//     }

//     return(
//         <div id={style.myform}>
//             <article >
//                 <label htmlFor="">Name :</label>
//                 <input type="text" value={name} onChange={nameData} /><br />
//                 <label htmlFor="">Salary :</label>
//                 <input type="text" value={salary} onChange={salaryData}/><br />
//                 <label htmlFor="">Company :</label>
//                 <input type="text" value={company} onChange={companyData}/><br />
//                 <button onClick={formHandle}>Submit</button>
//             </article>
            
//         </div>
//     )
// }

// export default CreateUsers


const CreateUsers=()=>{
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let [company,setCompany]=useState("")

    let navigate=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }
    let formHandle=()=>{
        let payload={name,salary,company}

        axios.post(" http://localhost:3000/users",payload)
        .then(()=>{
            console.log("Data successfully addded");
        })
        .catch(()=>{
            console.log("Something went wrong");
        })
        navigate("/users")
    }
    return(
        <div id={style.myform}>
            <article>
                <label htmlFor="">Name :</label>
                <input type="text" value={name} onChange={nameData}/>
                <label htmlFor="">Salary :</label>
                <input type="text" value={salary} onChange={salaryData}/>
                <label htmlFor="">Company :</label>
                <input type="text" value={company} onChange={companyData}/>
                <button onClick={formHandle}>Submit</button>
            </article>

        </div>
    )
}

export default CreateUsers