import React, { useState } from 'react';
import Logo from '../Components/Logo.jsx';
import { H2Title } from '../Components/H2Title.jsx';
import LineaNegra from '../Components/LineaNegra.jsx';

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

    try {
      const res = await fetch('http://127.0.0.1:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      console.log(res);
    } catch (error) {
      console.error('Error:', error);
    }

    // Limpia los campos después del registro
    setUsername('');
    setEmail('');
    setPassword('');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const inputStyle = {
    width: '260px',
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
      <LineaNegra></LineaNegra>
      <div className="flex">
      <div className="w-1/2 p-4">
        <h2>
          <Logo></Logo>
          </h2>
          <br></br>
          <h2 style={H2Title}>- Descubre, informate e investiga en un solo click! -</h2>
          <br></br>
          <p>Vision Employment es la mejor herramienta para encontrar información sobre egresados de las diferentes universidades en Colombia</p>
      </div>
      <div className="w-1/2 p-4">
      <h2 style={H2Title}>Registro</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          value={username}
          placeholder="Nombre de usuario"
          onChange={(e) => setUsername(e.target.value)}
          required
          style={inputStyle}
        />
        <br></br>
        <input
          type="email"
          value={email}
          placeholder="Correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <br></br>
        <input
          type="password"
          value={password}
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />
        <br></br>
        <button type="submit" style={buttonStyle}>
          Registrarse
        </button>
      </form>
      </div>
      </div>
    </div>
  );
}

export default Register;
