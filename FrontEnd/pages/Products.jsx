import { useEffect, useState } from 'react'
import Card from '../components/Card'
import style from './Home.module.css'
import Title from '../components/title';
import { faRightFromBracket, faShop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import TopBar from '../Components/TopBar';
import LinesChart from '../Components/LinesChart';


function Products() {
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

    const valores = [100, 200, 300];
    const valores2 = [200, 400, 500];
    const labels = ['2018', '2023'];

  return (
    <div>
        {/*<NavbarSimple></NavbarSimple>*/}
        <TopBar logo={logo} links={links}></TopBar>

        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'centerr',
            }}>

            <br></br>
            <br></br>
            <Title fontSize={30}>Datos de tu compra universidad</Title>
            <br></br>

            <div className={style.container}>
                <div className={style.card}>
                <LinesChart
                    valores={valores}
                    valores2={valores2}
                    labels={labels}
                    label="Graduados"
                    label2="Ingresados"
                    min={0}
                    max={500}
                />
                </div>
            </div>

        </div>
        

    </div>
  )
}

export default Products