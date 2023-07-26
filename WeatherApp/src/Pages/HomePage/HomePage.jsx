import "./HomePage.css"
import StartPage from "../StartPage/StartPage"
import Search from "../Search/Search"
import { Routes , Route } from "react-router-dom"



const HomePage = () => {
    return(
        <>
            <div className="container1">
                <Routes>
                    
                    <Route path="/" element={<StartPage/>}/>
                        
                    <Route path="/search" element={<Search/>}/>
                    

                </Routes>
            </div>
        </>
    )
}

export default HomePage