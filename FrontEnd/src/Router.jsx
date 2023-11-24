import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import 'tailwindcss/tailwind.css';
import Login from "../pages/Login";
import Home from "../pages/Home";
import Payment from "../pages/Payment";
import Graphs from "../pages/Graphs";
import Products from "../pages/Products";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/payment/:universityId" element={<Payment/>}/>
      <Route path="/graphs" element={<Graphs/>}/>
      <Route path="/products" element={<Products/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
