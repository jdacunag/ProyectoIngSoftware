import React, { Component } from "react";
import CentrarTexto from "../Components/CentrarTexto";
import {titulo} from "../Components/Titulo";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const  navigate = useNavigate();
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
            const response = await res.json(); 

        if(res){
          navigate('/home')
        }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2 style = {titulo}>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <div style = {{...CentrarTexto, left: '41.3%'}}>
                    <label>Usuario:</label>
                    <input
                        type="text"
                        name="username" // Debería ser "username" en lugar de "email"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div style = {{...CentrarTexto, top: '55%' }}>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" style = {{...CentrarTexto, top: '60%', height: '30px', left: '44%'}}>Iniciar Sesión</button> {/* Cambiado de "type="button"" a "type="submit"" */}
            </form>
        </div>
    );
}

export default Login;
