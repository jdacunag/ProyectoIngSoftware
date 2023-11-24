import { useEffect, useState } from "react";
import Card from "../components/Card";
import style from "./Home.module.css";
import Title from "../components/title";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import NavbarSimple from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  useSession  from "../hooks/useSession";

function Home() {
  const {userId} = useSession();
  useEffect(() => {
    
    // Realiza la solicitud GET para obtener la lista de universidades
    fetch("http://127.0.0.1:8000/University")
      .then((response) => response.json())
      .then((data) => setUniversities(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  const [universities, setUniversities] = useState([]);
  console.log(userId)
  return (
    <div>
      <NavbarSimple></NavbarSimple>
      <div className={style.container}>
        <div>
          <Title className={style.title}>Universidades Disponibles</Title>
        </div>
        <div className={style.projects}>
          {universities.map((uni) => (
            <Card key={uni.nombre}>
              <img src={uni.logo} className={style.banner} />
              <div className={style.panel}>
                <p>{uni.nombre}</p>
                <p>{uni.email}</p>

                <button className={style.button}>
                  <FontAwesomeIcon icon={faShop} color="red" size="x1" />
                  <p>comprar</p>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Home;
