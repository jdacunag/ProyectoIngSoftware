import { useEffect, useState } from 'react'
import Card from '../components/Card'
import style from './Home.module.css'
import Title from '../components/title';
import { faRightFromBracket, faShop } from '@fortawesome/free-solid-svg-icons';
import	NavbarSimple from '../components/Navbar'
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import useSession from '../hooks/useSession';


function Home() {
  const navigate = useNavigate();
  const {userId} = useSession();
  console.log(userId)
  const handlePurchase = async(e) => {
    e.preventDefault();

    // AGREGAR AL CARRITO LA ESCUELA SELECCIONADA
    // NO MANDAR DE UNA (OPCIONAL)

    navigate('/payment');
  };

  useEffect(() => {
    
    // Realiza la solicitud GET para obtener la lista de universidades
    fetch("http://127.0.0.1:8000/University")
      .then((response) => response.json())
      .then((data) => setUniversities(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  const [universities, setUniversities] = useState([]);
 
  return (
    <div>
      <NavbarSimple></NavbarSimple>
      <div className={style.container}>
        <div>
          <Title className={style.title}>Universidades Disponibles</Title>
        </div>
        <div className={style.projects}>
          {universities.map((uni) => (
            <Card key={uni.nombre}>
              <img src={uni.logo} className={style.banner} />
              <div className={style.panel}>
                <p>{uni.nombre}</p>
                <p>{uni.email}</p>
                <div>
                <Button className={style.button} icon={faShop} onClick={handlePurchase}>Comprar información</Button>
                </div>
                </div>
              </Card>
            ))}
        </div>
        </div>
        </div>

    
  );
}

export default Home;
