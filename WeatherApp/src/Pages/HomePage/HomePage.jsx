import "./HomePage.css"
import StartPage from "../StartPage/StartPage"
import Search from "../Search/Search"
import Weather from "../Weather/Weather"
import { Routes , Route } from "react-router-dom"
import { useState } from "react"



const HomePage = () => {

    const[inputValue , setInputValue] = useState()
    const[imgFunction , setImgFunction] = useState()


    return(
        <>
            <div className="container1">
                <Routes>
                    
                    <Route path="/" element={<StartPage/>}/>
                        
                    <Route path="/search" element={<Search imgFunction = {imgFunction} setImgFunction = {setImgFunction}  inputValue = {inputValue} setInputValue = {setInputValue}/>}/>
                    
                    <Route path="/weather" element={<Weather imgFunction = {imgFunction} setImgFunction = {setImgFunction}  inputValue = {inputValue} setInputValue = {setInputValue}/>}/>

                </Routes>
            </div>
        </>
    )
}

export default HomePage