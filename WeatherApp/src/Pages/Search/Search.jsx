import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Search.css'



const Search = () => {
    return(
        <>
            <div className='searchDiv'>
                <div className='backDiv'>
                    <Link to="/">
                        <button class="button">
                            <svg class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" stroke-linejoin="round" stroke-linecap="round"></path>
                            </svg>
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
                    <input required="" type="text" name="text" class="input"/>
                    <label class="label">city name</label>
                </div>
                <div className='searchBtnDiv'>
                    <Button variant="primary" className='searchtBtn' >VIEW STATUS</Button>
                </div>
            </div>
        </>
    )
}

export default Search