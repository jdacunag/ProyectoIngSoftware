import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import 'tailwindcss/tailwind.css';
import Login from "../pages/Login"
import Home from "../pages/Home"
import Payment from "../pages/Payment"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/payment" element={<Payment/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
