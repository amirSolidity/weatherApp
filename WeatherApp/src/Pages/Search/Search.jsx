import { Link , NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Search.css'
import { AiOutlineArrowLeft } from 'react-icons/Ai';
import { useState } from 'react';




const Search = (props) => {
    
    const [myInput , setMyInput] = useState('')
    props.setInputValue(myInput)
    return(
        <>        
            <div className='searchDiv'>
                <div className='backDiv'>
                    <Link to="/">
                        <button class="button">
                            <AiOutlineArrowLeft className='leftSvg'/>
                            <div class="text">
                                back
                            </div>
                        </button>
                    </Link>
                </div>

                <div className='SearchImgDiv'>
                    <img src='https://img.icons8.com/?size=512&id=6AAyqKfBlzoB&format=png' className='searchImg'/>
                </div>

                <div className='searchDescription'>
                    <p className='searchDes'>Write the name of the desired city</p>
                </div>

                <div class="container">
                    <input required="" type="text" name="text" class="input" value={myInput} onChange={(event) => setMyInput(event.target.value)}/>
                    <label class="label">city name</label>
                </div>
                <div className='searchBtnDiv'>
                    <NavLink to='/weather'>
                        <Button variant="primary" className='searchtBtn' onClick={props.imgFunction}>VIEW STATUS</Button>
                    </NavLink>
                    
                </div>
            </div>
        </>
    )
}

export default Search