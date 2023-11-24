import { useEffect, useState } from 'react'
import Card from '../components/Card'
import style from './Home.module.css'
import Title from '../components/title';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import	NavbarSimple from '../components/Navbar'



function Home() {
  useEffect(() => {
    // Realiza la solicitud GET para obtener la lista de universidades
    fetch('http://127.0.0.1:8000/University')
      .then((response) => response.json())
      .then((data) => setUniversities(data))
      .catch((error) => console.error('Error:', error));
  }, []);
  const [universities, setUniversities] = useState([]);
  console.log(universities)

  

  return (
    <div>
      <NavbarSimple></NavbarSimple>
        <div className={style.container}>
        <div>
                <Title className={style.title}> 

                  payasooooo
                 </Title>
                <button type="button" className={style.button}>
                    <FontAwesomeIcon icon={faRightFromBracket} color="black" size="5x" />
                </button>
            </div>
        <div >
        {universities.map((uni) => (
              <Card  key={uni.id}>
                <img src={uni.logo} alt="" />
                <p>{uni.nombre}</p>
                <p>{uni.email}</p>
              </Card>
            ))}
        </div>
        </div>

          
  
        <div>
        </div>
    </div>
  )
}

export default Home