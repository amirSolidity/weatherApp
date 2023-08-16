import axios from "axios"
import { useEffect, useState } from "react"
import "./Weather.css"
import { HiLocationMarker } from 'react-icons/Hi';




 const Weather = (props)=> {

    const[main , setMain] = useState([])
    const[des , setDes] = useState([])
    const[windSpeed , setWindSpeed]  = useState([])
    const[humidity , setHumidity] = useState([])
    const[feels_like , setFeels_like] = useState([])
    const API_key = "e04a240fb165555ed6094d81b4e96e58"
    const cityName = props.inputValue
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}&units=metric`
    useEffect(()=>{
        axios.get(apiUrl)
        .then((data)=>{
            setMain(data.data.main.temp)
            setDes(data.data.weather[0].description)
            setWindSpeed(data.data.wind.speed)
            setHumidity(data.data.main.humidity)
            setFeels_like(data.data.main.feels_like)
        })
    },[])

    function setImg(){
        const wImg = document.getElementById('wImg')
            if(des == "few clouds"){
                wImg.src = "https://img.icons8.com/?size=512&id=zIVmoh4T8wh7&format=png"
            }else if(des == "clear sky"){
                wImg.src = "https://img.icons8.com/?size=512&id=cWfpk9mCJWJm&format=png"
            }else if(des == "broken clouds"){
                wImg.src = "https://cdn.icon-icons.com/icons2/2453/PNG/512/cloud_clouds_sun_cloudy_weather_icon_148915.png"
                wImg.style.width = "14rem"
            }else if(des == "scattered clouds"){
                wImg.src = "https://cdn.icon-icons.com/icons2/2791/PNG/512/partly_cloudy_day_sun_clouds_weather_icon_177560.png"
            }else if(des == "shower rain"){
                wImg.src = "https://img.icons8.com/?size=512&id=7Dcax1eBasEf&format=png"
            }else if(des == "rain"){
                wImg.src = "https://img.icons8.com/?size=512&id=R1kPtXvDMnWj&format=png"
            }else if(des == "thunderstorm"){
                wImg.src = "thunderstorm"
            }else if(des == "snow"){
                wImg.src = "https://img.icons8.com/?size=512&id=cyZConbteZk9&format=png"
            }else if(des == "mist"){
                wImg.src = "https://img.icons8.com/?size=512&id=LktBoDfNx5kT&format=png"
            }else if(des == "light rain"){
                wImg.src = "https://img.icons8.com/?size=512&id=MVj2tmasj0Pp&format=png"
            }

    }

    props.setImgFunction(setImg())
    return(
        <>
            <div className="weather">
                <div className="wHeader">
                    <HiLocationMarker className="locationIcon"/>
                    <p className="locationP">{props.inputValue}</p>
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
                            <img className="des1Img" src="https://img.icons8.com/?size=512&id=RtDA8YDN9Mi9&format=png"/>
                        </div>
                        <p className="num1">{windSpeed}km/h</p>
                        <p className="text1">wind</p>
                    </div>
                    <div className="Description2">
                        <div className="Description2-Img">
                            <img className="des2Img" src="https://img.icons8.com/?size=512&id=MVj2tmasj0Pp&format=png"/>
                        </div>
                        <p className="num2">{humidity}%</p>
                        <p className="text2">Rain</p>
                    </div>
                    <div className="Description3">
                    <div className="Description3-Img">
                            <img className="des3Img" src="https://img.icons8.com/?size=512&id=wBPV56Uje50D&format=png"/>
                        </div>
                        <p className="num3">{feels_like}km/h</p>
                        <p className="text3">night</p>
                    </div>
                </div>
                <div className="menu">

                </div>
            </div>
        </>
    )
 }

 export default Weather