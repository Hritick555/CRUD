import { Link } from "react-router-dom"
import style from "./home.module.css"

const Homecrud=()=>{
    return(
        <section id={style.nav}>
            <Link to="/createusers">Create Users</Link>
            <Link to="/users">Users</Link>
        </section>
    )
}

export default  Homecrud