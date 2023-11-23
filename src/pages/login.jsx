import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputDefault from '../Components/Input.jsx';
import SimpleFooter from '../Components/Footer.jsx';
import TwoColumnPage from '../Components/TwoColumns.jsx';
import CentrarTexto from '../Components/CentrarTexto.jsx';
import { H2Title } from '../Components/H2Title.jsx';
import Logo from '../Components/Logo.jsx';
import LineaNegra from '../Components/LineaNegra.jsx';

function Login() {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            username: nombre,
            password: password,
        };

        try {
            const res = await fetch('http://127.0.0.1:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (res) {
                navigate('/home');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const inputStyle = {
        width: '300px',
        height: '30px',
        margin: '10px',
        padding: '5px',
    };

    const buttonStyle = {
        width: '120px',
        height: '40px',
        margin: '20px',
        backgroundColor: '#3498DB',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    };
    const columnStyle = {
        display: 'inline-block',
        width: '50%', /* Divide el ancho en dos columnas */
        padding: '20px', /* Espacio entre el contenido y el borde */
    };

    const container = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
    };

    const card = {
        maxWidth: '380px',
        width: '100%',
    };

    const form = {
        display: 'flex',
        gap: '15px',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    };

    const brand = {
        display: 'flex',
        gap: '15px',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '25px',
    };

    const logo = {
        maxWidth: '380px',
        width: '100%',
    };

    return (
        <div style={container}>
            <div className="flex">
                <div style={card}>
                    <card>
                        <h2>
                            <Logo></Logo>
                        </h2>
                        <br></br>
                        <h2 style={H2Title}>- Descubre, informate e investiga en un solo click! -</h2>
                        <br></br>
                        <p>Vision Employment es la mejor herramienta para encontrar información sobre egresados de las diferentes universidades en Colombia</p>
                    </card>
                </div>
                <div style={card}>
                    <card>
                        <h2 style={H2Title}>Iniciar Sesión</h2>
                        <br></br>
                        <form onSubmit={handleLogin} style={formStyle}>
                            <label>Usuario:</label>
                            <input
                                type="text"
                                name="username"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                style={inputStyle}
                            />
                            <label>Contraseña:</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={inputStyle}
                            />
                            <button type="submit" style={buttonStyle}>
                                Iniciar Sesión
                            </button>
                        </form>
                        <Link to="/register"><h2 style={H2Title}>Ir a Registro</h2></Link>
                    </card>
                </div>
            </div>
            <br></br>
            <SimpleFooter style={{ height: '100px' }}></SimpleFooter>
        </div>
    );
}

export default Login;
