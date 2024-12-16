import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let post = "강남 우동 맛집";

  return (
    <>
    <div className="App">
      <div className='black-nav'>
        <h4>블로그임</h4>
      </div>
    </div>
    </>
  )
}

export default App
