import { useEffect, useState } from "react"
import axios from "axios"
const WebPage=()=>{
    let[cont,setCont]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((response)=>{
            console.log("got the data");
            console.log(response.data);
            setCont(response.data);
    
        })
        .catch(()=>{
            console.log("did not get the data")
        })
    },[])
    return(
        <div>
  {cont.map((x)=>{
                return(
                <div >
                

             <table>
                <tr>
                <th>webuser</th>
                </tr>
                <tr>
                    <td>Name:</td>
                    <td>{x.name}</td>
                </tr>
                <tr>
                    <td>age:</td>
                    <td>{x.age}</td>
                </tr>
            </table>
            
            </div>
                )})}
        </div>
    )
}

export default WebPage