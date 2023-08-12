import axios from "axios"
import { useEffect, useState } from "react"
import "./Weather.css"
import { HiLocationMarker } from 'react-icons/Hi';




 const Weather = ()=> {

    const[main , setMain] = useState([])
    const [des , setDes] = useState([])
    const API_key = "e04a240fb165555ed6094d81b4e96e58"
    const cityName = "tabriz"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}&units=metric`
    useEffect(()=>{
        axios.get(apiUrl)
        .then((data)=>{
            setMain(data.data.main.temp)
            setDes(data.data.weather[0].description)
            setImg()
        })
    },[])

    function setImg(){
        const wImg = document.getElementById('wImg')
            if(des == "few clouds"){
                wImg.src = "https://img.icons8.com/?size=512&id=zIVmoh4T8wh7&format=png"
            }else if(des == "clear sky"){
                wImg.src = "https://img.icons8.com/?size=512&id=cWfpk9mCJWJm&format=png"
            }
    }

    return(
        <>
        {console.log(main)}
        {console.log(des)}
            <div className="weather">
                <div className="wHeader">
                    <HiLocationMarker className="locationIcon"/>
                    <p className="locationP">New York</p>
                </div>
                <div className="date">
                    <p className="day">Today`s Report</p>
                </div>
                <div className="temperature">
                    <div className="temperatureImg">
                        <img className="img" id="wImg"/>
                    </div>
                    <div className="details">
                        <p className="textual">{des}</p>
                        <h1 className="numerical">{main}</h1>
                    </div>
                </div>
                <div className="Additional">
                    <div className="Description1">
                        <div className="Description1-Img">
                            <img className="des1Img"/>
                        </div>
                        <p className="num1"></p>
                        <p className="text1"></p>
                    </div>
                    <div className="Description2">
                    <div className="Description2-Img">
                            <img className="des2Img"/>
                        </div>
                        <p className="num2"></p>
                        <p className="text2"></p>
                    </div>
                    <div className="Description3">
                    <div className="Description3-Img">
                            <img className="des3Img"/>
                        </div>
                        <p className="num3"></p>
                        <p className="text3"></p>
                    </div>
                </div>
                <div className="menu">

                </div>
            </div>
            <button onClick={setImg}>hello</button>
        </>
    )
 }

 export default Weather