import { faCartShopping, faCancel } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/input";
import Title from "../components/title";
import ListBox from "../components/ListBox";
import { useNavigate } from "react-router-dom";
import useSession from "../hooks/useSession";
import { useLocation } from "wouter";

import style from "./Payment.module.css";
import TopBar from "../Components/TopBar";

export default function Payment() {
  const [location] = useLocation();
  var { userId } = useSession();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const paymentMethodRef = useRef(null);
  const addressRef = useRef(null);
  const dateRef = useRef(null);
  const cvvRef = useRef(null);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const universityId = location.split("/").pop();

    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/university/${universityId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) {
          throw new Error(
            `Error al obtener la Universidad. Código de estado: ${res.status}`
          );
        }

        const University = await res.json();
        setCartItems([University.nombre]);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData(); // Llama a la función fetchData al montar el componente

    // Si deseas realizar alguna acción de limpieza, puedes retornar una función
    // desde useEffect que se ejecutará al desmontar el componente
    return () => {
      // Acciones de limpieza, si es necesario
    };
  }, []);

  const total = ["$1.000"];

  const navigate = useNavigate();

  const handleCancel = async (e) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const paymentMethod = paymentMethodRef.current?.value;
    const address = addressRef.current?.value;
    const date = dateRef.current?.value;
    const cvv = cvvRef.current?.value;
    const universityId = location.split("/").pop();
    const userData = {
      name,
      email,
      paymentMethod,
      address,
      date,
      cvv,
      userId,
      universityId,
    };

    try {
      console.log(userData);
      const res = await fetch("http://127.0.0.1:8000/Purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(userData),
      });
    } catch (error) {
      console.error("Error:", error);
    }
     navigate("/home");
  };

  const title = "Zona de Pagos";
  const logo = "Mi Logo";
  const links = [
    { url: "/products", label: "Mis Productos" },
    { url: "/", label: "Cerrar Sesión" },
  ];

  return (
    <div>
      <TopBar logo={logo} links={links}></TopBar>
      <div className={style.container}>
        <div className={style.card}>
          <Card>
            <div className={style.title}>
              <Title>{title}</Title>
              <br></br>
              <br></br>
            </div>
            <form onSubmit={handleCancel} className={style.form}>
              <div className={style.columnsContainer}>
                {/* Columna 1 */}
                <div className={style.column}>
                  <Title fontSize={22}>Información de pago</Title>
                  <br></br>
                  <br></br>
                  <Title fontSize={14}>Nombre completo</Title>
                  <Input
                    type="text"
                    placeholder="Nombre completo"
                    focus
                    inputRef={nameRef}
                    required
                  />
                  <br></br>
                  <Title fontSize={14}>Email</Title>
                  <Input
                    type="text"
                    placeholder="Email"
                    focus
                    inputRef={emailRef}
                    required
                  />
                  <br></br>
                  <Title fontSize={14}>Direccion</Title>
                  <Input
                    type="text"
                    placeholder="Dirección"
                    focus
                    inputRef={addressRef}
                    required
                  />
                  <br></br>
                  <Title fontSize={14}>Numero de la Tarjeta</Title>
                  <Input
                    type="text"
                    placeholder="Numero de la Tarjeta"
                    focus
                    inputRef={paymentMethodRef}
                    required
                  />
                  <div className={style.columnsContainer}>
                    <div className={style.column}>
                      <br></br>
                      <Title fontSize={14}>Fecha Expiración</Title>
                      <Input
                        type="date"
                        placeholder="Numero Tarjeta"
                        focus
                        inputRef={dateRef}
                        required
                      />
                    </div>
                    <div className={style.column}>
                      <br></br>
                      <Title fontSize={14}>CVC/CVV</Title>
                      <Input
                        type="text"
                        placeholder="CVC/CVV"
                        focus
                        inputRef={cvvRef}
                        required
                      />
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                  <Button submit icon={faCartShopping}>
                    Completar Pago
                  </Button>
                </div>
                {/* Columna 2 */}
                <div className={style.column}>
                  <ListBox boxTitle="Lista del carrito">{cartItems}</ListBox>
                  <br></br>
                  <br></br>
                  <ListBox boxTitle="TOTAL">{total}</ListBox>

                  <br></br>
                  <Button
                    backgroundColor="#d84242"
                    onClick={handleCancel}
                    icon={faCancel}
                  >
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
