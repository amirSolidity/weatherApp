import "./HomePage.css"
import StartPage from "../StartPage/StartPage"
import { Routes } from "react-router-dom"
import { Route } from "react-router"



const HomePage = () => {
    return(
        <>
            <Routes>
                
                <Route path="/">
                    <Route index element={<StartPage/>}/>
                </Route>

            </Routes>
        </>
    )
}

export default HomePage