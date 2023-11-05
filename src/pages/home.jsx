import React from 'react'
import SimpleFooter from '../components/Footer'
import NavbarSimple from '../components/Navbar'
import ProductCard from '../components/sell_card'
function home() {
  return (
    <div>
        <div>
        <NavbarSimple></NavbarSimple>
        <div style={{display:"inline"}}>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        </div>
        </div>

          
  
        <div>
        <SimpleFooter></SimpleFooter>
        </div>
    </div>
  )
}

export default home