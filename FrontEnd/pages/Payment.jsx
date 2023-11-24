import { faCableCar, faCancel, faCartArrowDown, faCartFlatbed, faCartFlatbedSuitcase, faCartPlus, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import { useLocation } from 'wouter';
import Card from '../components/Card';
import Link from '../components/Link';
import Button from '../components/Button';
import Input from '../components/input';
import Title from '../components/title';
import ListBox from '../components/ListBox';
import { useNavigate } from 'react-router-dom';

import style from './Payment.module.css';
import TopBar from '../Components/TopBar';

export default function Payment() {
    const [location, setLocation] = useLocation();
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const descriptionRef = useRef(null);
    const estadoRef = useRef(null);
    const fechaFinRef = useRef(null);
    const cartItems = ["Compra 1", "Compra 2", "Compra 3", "Compra 4", "Compra 5"];
    const total = ["$1.000"];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const ProjectId = location.split('/')[2];
        const description = descriptionRef.current?.value;
        const estado = estadoRef.current?.value;
        const fechaFin = fechaFinRef.current?.value;
                //await taskapi.editById(ProjectId, taskId, title, description, fechaFin, estado )
        //setLocation(`/projects/${ProjectId}`);
    };

    const navigate = useNavigate();

    const handleCancel = async (e) => {
        e.preventDefault();
        navigate('/home');
    };

    //const title = location.split('/').pop() === 'edit' ? 'Edit Task' : 'Create Task';
    const title = 'Zona de Pagos';
    const logo = "Mi Logo";
    const links = [
      { url: '/products', label: 'Mis Productos' },
      { url: '/', label: 'Cerrar Sesión' }
    ];

    return (
        <div>
        <TopBar logo={logo} links={links}></TopBar>
        <div className={style.container}>
            <div className={style.card}>

                <Card>
                    <div className={style.title}>
                        <Title>{title}</Title>
                        <br></br><br></br>
                    </div>
                    <form onSubmit={handleSubmit} className={style.form}>
                        <div className={style.columnsContainer}>
                            {/* Columna 1 */}
                            <div className={style.column}>
                                <Title fontSize={22}>Información de pago</Title>
                                <br></br><br></br>
                                <Title fontSize={14}>Nombre completo</Title>
                                <Input type="text" placeholder="Nombre completo" focus inputRef={nameRef} required/>
                                <br></br>
                                <Title fontSize={14}>Email</Title>
                                <Input type="text" placeholder="Email" focus inputRef={emailRef} required/>
                                <br></br>
                                <Title fontSize={14}>Direccion</Title>
                                <Input type="text" placeholder="Dirección" focus inputRef={emailRef} required/>
                                <br></br>
                                <Title fontSize={14}>Numero de la Tarjeta</Title>
                                <Input type="text" placeholder="Numero de la Tarjeta" focus inputRef={emailRef} required/>
                                <div className={style.columnsContainer}>
                                    <div className={style.column}>
                                        <br></br>
                                        <Title fontSize={14}>Fecha Expiración</Title>
                                        <Input type="date" placeholder="Numero Tarjeta" focus inputRef={emailRef} required/>
                                    </div>
                                    <div className={style.column}>
                                        <br></br>
                                        <Title fontSize={14}>CVC/CVV</Title>
                                        <Input type="text" placeholder="CVC/CVV" focus inputRef={emailRef} required/>
                                    </div>
                                </div>
                                <br></br><br></br>
                                <Button submit icon={faCartShopping}>
                                    Completar Pago
                                </Button>
                            </div>
                            {/* Columna 2 */}
                            <div className={style.column}>
                                <ListBox children={cartItems} boxTitle='Lista del carrito' />
                                <br></br><br></br>
                                <ListBox children={total} boxTitle='TOTAL' />

                                <br></br>
                                <Button backgroundColor='#d84242' onClick={handleCancel} icon={faCancel}>
                                    Cancelar Compra
                                </Button>
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
        </div>
    );
    
}