// import CreateUsers from "./Components/CreateUsers"
// import Users from "./Components/Users"
// import Homecrud from "./Components/Homecrud"
import { BrowserRouter,Routes,Route } from "react-router-dom"
// import EditUsers from "./Components/EditUsers"
import PracticehmPage from "./Components/PracticehmPage"
import WebPage from "./WebPage"
import CreateWeb from "./CreateWeb"

const App=()=>{
    return(
        <div>
            {/* <BrowserRouter>
                <Homecrud />
                <Routes>

                    <Route path="/createusers" element={<CreateUsers/>}/>
                    <Route path="/users" element={<Users/>} />
                    <Route path="/edit" element={<EditUsers/>}/>

                </Routes>
            </BrowserRouter> */}
            <BrowserRouter >
                 <PracticehmPage />
                 <Routes>
                    <Route path='/createWeb' element={<CreateWeb/>}/>
                    <Route path='/Webpage'  element={<WebPage/>}/>
                 </Routes>
                    
            </BrowserRouter>
        </div>
    )
}

export default App