import { useState } from 'react'
import './App.css'
import Background from './components/Background'
import slider1 from "./assets/img/slider1.jpg"
import slider2 from "./assets/img/slider2.jpg"
import slider3 from "./assets/img/slider3.jpg"
import slider4 from "./assets/img/slider4.jpg"
import slider5 from "./assets/img/slider5.jpg"

function App() {

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
            <img className='slider slider_one' src={slider1} alt="imagen delizable" />
            <img className='slider slider_two' src={slider2} alt="imagen delizable" />
            <img className='slider slider_three' src={slider3} alt="imagen delizable" />
            <img className='slider slider_four' src={slider4} alt="imagen delizable" />
            <img className='slider slider_five' src={slider5} alt="imagen delizable" />
          </div>
          <div className="over__hero">

          </div>
        </div>
      </header>
      <main>

      </main>
    </div>
  )
}

export default App
