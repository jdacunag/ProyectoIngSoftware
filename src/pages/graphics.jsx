/*
    Estos 'imports' sirven para incluir bootstrap, NO son necesarios para
    utilizar las gráficas de ChartJS. Yo los utilizaré para modificar 
    rápidamente el aspecto de mi página durante los ejemplos expuestos. 
*/
import LinesChart from "../components/LinesChart";
import Pies from "../components/PiesChart";
import Bars from "../components/BarsChart";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import NavbarSimple from "../components/Navbar";







function App() {
    return (
        <div>
            {/* Aquí incluiré las gráficas (un componente por cada ejemplo). */}
            <nav>
                <NavbarSimple></NavbarSimple>
            </nav>
            <div>
                <p className="m-2"><b></b>Gráfico de líneas Universidades contratados derecho</p>
                <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px", height:"230px"}}>
                      <LinesChart></LinesChart>
                </div>
            </div>
            <hr className="mt-3 mb-2"/>
            <div>
                <p className="m-2"><b></b>Gráfico de barras</p>
                <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px", height:"225px"}}>
              <Bars></Bars>
                </div>
            </div>
            <hr className="mt-3 mb-2"/>
            <div>
                <p className="m-2"><b> </b>Gráfico circular</p>
                <div className="bg-light mx-auto border border-2 border-primary" style={{width:"450px", height:"250px"}}>
                    <div style={{width:"100%", height:"100%", padding:"10px 0"}}>
                          <Pies></Pies>
                    </div>
                </div>
            </div>
            <footer>

                <Footer></Footer>
            </footer>
        </div>
    );
}

export default App;