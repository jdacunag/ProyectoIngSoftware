import { useEffect, useState } from 'react'
import SimpleFooter from '../components/Footer'
import NavbarSimple from '../components/Navbar'
import ProductCard from '../components/sell_card'



function home() {
  useEffect(() => {
    // Realiza la solicitud GET para obtener la lista de universidades
    fetch('http://127.0.0.1:8000/University')
      .then((response) => response.json())
      .then((data) => setUniversities(data))
      .catch((error) => console.error('Error:', error));
  }, []);
  const [universities, setUniversities] = useState([]);


  

  return (
    <div>
        <div>
        <NavbarSimple></NavbarSimple>
        <div style={{display:"inline"}}>
        {universities.map((uni) => (
              <ProductCard university={uni}  key={uni.id}/>
            ))}
        </div>
        </div>

          
  
        <div>
        <SimpleFooter></SimpleFooter>
        </div>
    </div>
  )
}

export default home