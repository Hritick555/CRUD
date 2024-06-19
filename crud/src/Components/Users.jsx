import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import style from "./home.module.css"

const Users=()=>{
    let[content,setContent]=useState([])
    useEffect(()=>{
        axios.get(" http://localhost:3000/users")
    .then((response)=>{
        console.log("Got the data");
        console.log(response.data);
        console.log(response);
        setContent(response.data)
    })
    .catch(()=>{
        console.log("Did not get the data");
    })
    },[])
    return(
        <div id={style.usersHome}>
          {
            content.map((x)=>{
                return(
                    <div id={style.cards}>
                       <table>
                           <tr>
                            <th colSpan="2">Users {x.id}</th>
                           </tr>
                           <tr>
                            <td>Name </td>
                            <td>:{x.name}</td>
                           </tr>
                           <tr>
                            <td>Salary </td>
                            <td>:{x.salary}</td>
                           </tr>
                           <tr>
                            <td>Company</td>
                            <td>:{x.company}</td>
                           </tr>
                           <tr>
                            <td><Link to="/edit" id={style.edit}>Edit </Link></td>
                         
                            <td><button>Delete</button></td>
                           </tr>
                       </table>
                    </div>
                )
            })
          }

        </div>
    )
}

export default Users
