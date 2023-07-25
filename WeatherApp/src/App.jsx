import { useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='count'>
        <HomePage/>
      </div>
    </>
  )
}

export default App