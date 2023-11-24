import { useEffect, useState } from 'react'
import Card from '../components/Card'
import style from './Home.module.css'
import Title from '../components/title';
import { faRightFromBracket, faShop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import	NavbarSimple from '../components/Navbar'
import Button from '../components/Button';


function Home() {
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
      <NavbarSimple></NavbarSimple>
        <div className={style.container}>
        <div>
                <Title className={style.title}> 

                 Universidades Disponibles
                 </Title>
            </div>
        <div className={style.projects}>
        {universities.map((uni) => (
              <Card  key={uni.nombre}>
                <img src={uni.logo} className={style.banner} />
                <p>{uni.nombre}</p>
                <p>{uni.email}</p>
                <div>
                <Button className={style.button} icon={faShop}>Comprar información</Button>
                </div>
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