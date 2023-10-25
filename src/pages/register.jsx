import React, { useState } from 'react';
import CentrarTexto from '../Components/CentrarTexto';
import  { titulo } from '../Components/Titulo';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      password,
    };
    try{
    const res = await fetch('http://127.0.0.1:8000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    console.log(res);
    }  catch (error) {
      console.error('Error:', error);
  }

    // Envía userData al servidor o realiza las acciones de registro necesarias
    

    // Limpia los campos después del registro
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div style = {{...CentrarTexto, top: '40%', height:'40%'}}>
      <h2 style = {{...CentrarTexto, top: '-20%', fontSize:'50px', height: '10%'}}>Registro</h2>
      <form onSubmit={handleRegister}>
        <div style = {{...CentrarTexto, top: '10%', height: '10%', width:'260px'}}>
          <label>Nombre de usuario:</label>
          <input
            
            type="text"
            value={username}
            name='username'
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style = {{...CentrarTexto, top: '25%', height: '10%', width:'260px'}}>
          <label> Correo electrónico: </label>
          <input
            type="email"
            value={email}
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style = {{...CentrarTexto, top: '40%', height: '10%', width:'260px'}}> 
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style = {{...CentrarTexto, top: '60%', height:'10%'}}>Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
