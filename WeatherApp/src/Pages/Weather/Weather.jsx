import axios from "axios"
import { useEffect, useState } from "react"
import "./Weather.css"
import { AiOutlineArrowLeft } from 'react-icons/Ai';




 const Weather = ()=> {

    const[list , setList] = useState([])
    const API_key = "e04a240fb165555ed6094d81b4e96e58"
    const cityName = "tehran"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}&units=metric`
    useEffect(()=>{
        axios.get(apiUrl)
        .then((data)=>{
            setList(data.data)
        })
    },[])

    return(
        <>
        {console.log(list)}
            <button>hello</button>
            <p className="ppppp">hello</p>
        </>
    )
 }

 export default Weather