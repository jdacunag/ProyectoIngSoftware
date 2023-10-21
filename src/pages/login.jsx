import React, { Component } from "react";
import CentrarTexto from "../Components/CentrarTexto";
import {titulo} from "../Components/Titulo";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleLogin = () => {
    // Simulación de inicio de sesión (reemplaza esto con la lógica real de inicio de sesión)
    if (this.state.email === "usuario" && this.state.password === "contraseña") {
      alert("Inicio de sesión exitoso");
    } else {
      alert("Error de inicio de sesión. Verifica tus credenciales.");
    }
  }

  render() {
    return (
      <div>
            <h2 style = {titulo}>Iniciar Sesión</h2> 
        <form>
          <div  style = {{...CentrarTexto, left: '41.3%'}}>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div  style = {{...CentrarTexto, top: '55%' }} >
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="button" onClick={this.handleLogin} style = {{...CentrarTexto, top: '60%', height: '30px', left: '44%'}}>Iniciar Sesión</button>
        </form>
      </div>
    );
  }
}

export default Login;