import "./StartPage.css"
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';

const StartPage = () => {
    return (
        <>
            <div className="container">
                <div className="imgDiv">
                    <img className="startImg" src="https://img.icons8.com/?size=512&id=zIVmoh4T8wh7&format=png"/>
                </div>
                <div className="description1">
                    <p className="startP1">Find out about the weather in your city</p>
                    <p className="startP2">Just click on the button and find your name</p>
                </div>
                <div className="startBtnDiv">
                    <Button variant="primary">Primary</Button>
                </div>
            </div> 
        </>
    )
}

export default StartPage 