import './App.css'
import Background from './components/Background'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home/> } />
      </Routes>
    </HashRouter>
  )
}

export default App
