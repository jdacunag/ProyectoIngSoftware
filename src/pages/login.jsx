import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
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

    return (
        <div style={containerStyle}>
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Iniciar Sesión</h2>
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
            <Link to="/register">Ir a Registro</Link>
        </div>
    );
}

export default Login;
