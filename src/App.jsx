import { useEffect, useState } from 'react'
import './App.css'
import Background from './components/Background'
import slider1 from "./assets/img/slider1.jpg"
import slider2 from "./assets/img/slider2.jpg"
import slider3 from "./assets/img/slider3.jpg"
import slider4 from "./assets/img/slider4.jpg"
import slider5 from "./assets/img/slider5.jpg"

function App() {
  const [count, setCount] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
        if (count == 5) {
          return setCount(1)
        }
        setCount(count + 1)
    }, 5000)
    return () => clearInterval(interval)
}, [count])

console.log(count);

  return (
    <div className="App">
      {/* <Background /> */}
      <header>
        <nav>
          <div className="nav_in">

          </div>
        </nav>
        <div className="hero">
          <div className='slider__hero'>
            <img className='slider' src={`slider${count}`} alt="imagen delizable" />
          </div>
          {/* <div className="over__hero">

          </div> */}
        </div>
      </header>
      <main>

      </main>
    </div>
  )
}

export default App
