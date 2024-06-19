import React from 'react'
import style from "./home.module.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'




const Read = () => {
    
    let[content,setContent]=useState([])

    useEffect(()=>{
        axios.get(` http://localhost:3000/users`)
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
    let deleteData=(index)=>{
         axios.delete(` http://localhost:3000/users/${index}`)
         window.location.assign("/read")
    }
  return (
    <div>
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
                            <td>:{x.sal}</td>
                           </tr>
                           <tr>
                            <td>Company</td>
                            <td>:{x.comp}</td>
                           </tr>
                           <tr>
                            <td>
                                <Link to={`/edit/${x.id}`}>Edit </Link></td>
                         
                            <td><button onClick={()=>{deleteData(x.id)}}>Delete</button></td>
                           </tr>
                       </table>
                    </div>
                )
            })
          }
    </div>
  )
}

export default Read