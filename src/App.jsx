import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import Graphics from "./pages/graphics"
import Home from "./pages/home"
import './index.css'
import 'tailwindcss/tailwind.css';
import PaymentForm from "./pages/PasarelaDepagos";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/graphics" element={<Graphics/>}/>
    <Route path="/payment" element={<PaymentForm/>}/>
    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App