import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Views/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Instructions from './Views/Instructions/Instructions'
import Configuration from './Views/Configurations/Configurations'
import InGame from './Views/InGame/InGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/instructions" element={< Instructions/>}/>
        <Route path="/configurations" element={<Configuration />} /> 
        <Route path="/ingame" element={<InGame/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
