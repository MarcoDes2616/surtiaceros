import { useEffect, useState } from 'react'
import './App.css'
import Background from './components/Background'
import slider1 from "./assets/img/slider1.jpg"
import slider2 from "./assets/img/slider2.jpg"
import slider3 from "./assets/img/slider3.jpg"
import slider4 from "./assets/img/slider4.jpg"
import slider5 from "./assets/img/slider5.jpg"
import Swiperm from './components/Swiper'
import personal from "./assets/img/personal.jpg"

function App() {
  const [count, setCount] = useState(0)
  const slider = [slider1, slider2, slider3, slider4, slider5]

  useEffect(() => {
    const interval = setInterval(() => {
      if (count == slider.length - 1) {
        return setCount(0)
      }
      setCount(count + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [count])

  return (
    <div className="App">
      {/* <Background /> */}
      <header>
        <div className="over__nav">
          <nav>
            <div className="nav_in">

            </div>
          </nav>
        </div>
        <div className="hero">
          <div className='slider__hero'>
            <img className='slider' src={slider[count]} alt="imagen delizable" />
          </div>
          <div className="over__hero">
            <div className="over__hero__in">

            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="enterprises">
          <h2>Nuestras Marcas...</h2>
          <Swiperm />
        </div>
        <div className='surtiaceros'>
          <div className="surtiaceros__inside">
            <div className="inside">
              <p>Full Steel Aceros industriales "SURTIACEROS" es una empresa nacional de tradición con más de 20 años en el país, su oficina principal en Quito, y con sucursales en Cuenca, Guayaquil, Coca especializada en el suministro de materiales para la industria ofreciendo soluciones enmarcadas en un continuo crecimiento, mejoramiento de calidad y servicio al cliente.</p>
              <img src={personal} alt="personal surtiaceros" />
              <p>De esta manera nos hace una de las empresas líderes en la comercialización de productos para conductos de fluidos, tenemos una muy buena carta de recomendación de nuestros clientes, dotada con recursos e infraestructura propia.</p>
              <p>Nuestro stock supera más de 6000 referencias, con inventario en tubería, válvulas, bridas, accesorios, ring gasket, espárragos, uniones de golpe, cintas de recubrimiento, químicos para mantenimiento. Que suplen los diferentes requerimientos, de las siguientes industrias: Petrolera, alimenticia, textilera, termoeléctrica, cementera, azucarera, metalmecánica, papelera y gas. Actualmente generamos empleo para profesionales, técnicos, que apoyados con nuestros excelentes productos, instalaciones modernas, con capacitación constante y una filosofía empresarial de servicio y atención al cliente hacemos la Gran Diferencia. Así empezamos dando inicio a una revolucionaria imagen con crecimiento enfocado cien por ciento a nuestros clientes.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
