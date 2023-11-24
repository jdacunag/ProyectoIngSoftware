import { useEffect, useState } from 'react'
import Card from '../components/Card'
import style from './Home.module.css'
import Title from '../components/title';
import { faRightFromBracket, faShop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import TopBar from '../Components/TopBar';


function Home() {
  const navigate = useNavigate();
  const handlePurchase = async(e) => {
    e.preventDefault();

    // AGREGAR AL CARRITO LA ESCUELA SELECCIONADA
    // NO MANDAR DE UNA (OPCIONAL)

    navigate('/payment');
  };

  const logo = "Vision Planning";
  const links = [
    { url: '/products', label: 'Mis Productos' },
    { url: '/', label: 'Cerrar Sesión' }
  ];

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
        {/*<NavbarSimple></NavbarSimple>*/}
        <TopBar logo={logo} links={links}></TopBar>
        <div className={style.container}>
        <div>
                <Title className={style.title}> 

                 Universidades Disponibles
                 </Title>
            </div>
        <div className={style.projects}>
        {universities.map((uni) => (
              <Card backgroundColor='#f0f0f0' key={uni.nombre}>
                <img
                  src={uni.logo}
                  className={style.banner}
                  style={{
                    padding: '10px',
                    border: '0px solid #000000',
                    aspectRatio: '28 / 10'
                  }}
                />
                <br></br><br></br>
                <div style={{ marginLeft: '10px' }}>
                  <Title fontSize={22}>{uni.nombre}</Title>
                  <p style={{ marginTop: '5px' }}>{uni.email}</p>
                </div>
                <br></br>
                <div>
                <Button className={style.button} icon={faShop} onClick={handlePurchase}>Comprar información</Button>
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