import LinesChart from "../components/LinesChart";
import Pies from "../components/PiesChart";
import Bars from "../components/BarsChart";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import NavbarSimple from "../components/Navbar";


function App() {
    return (
        <div>
            <nav>
                <NavbarSimple></NavbarSimple>
            </nav>
            <div>
                <p className="m-2"><b></b>Gráfico de líneas Universidades contratados derecho</p>
                <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px", height:"230px"}}>
                      <LinesChart
                          valores = {[72, 56, 20, 36, 80, 40, 30, 24, 55]}
                          labels = {["UDA", "EIA", "POLITECNICO", "UDM", "EAFIT", "UNAL", "ITM", "IUE", "PONTIFICIA"]}
                          label="realidad"
                          label2="expentativa"
                          valores2= {[20, 25, 60, 65, 45, 10, 5, 25, 35]}
                          max= {100}
                          >

                          </LinesChart>
                </div>
            </div>
            <hr className="mt-3 mb-2"/>
            <div>
                <p className="m-2"><b></b>Gráfico de barras</p>
                <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px", height:"225px"}}>
             
             <Bars
             valores={[72, 56, 20, 36, 80, 40, 30, 24, 55]}
             labels={["UDA", "EIA", "POLITECNICO", "UDM", "EAFIT", "UNAL", "ITM", "IUE", "PONTIFICIA"]}
             label="prueba"
             max={250}>
             
             </Bars>
             
                </div>
            </div>
            <hr className="mt-3 mb-2"/>
            <div>
                <p className="m-2"><b> </b>Gráfico circular</p>
                <div className="bg-light mx-auto border border-2 border-primary" style={{width:"450px", height:"250px"}}>
                    <div style={{width:"100%", height:"100%", padding:"10px 0"}}>
                          <Pies
                            labels={['UDA', 'EIA', 'EAFIT', 'UDM', 'UNAL']} 
                            valores=  {[35, 20, 20, 15, 10]}
                            label= 'Popularidad en Navidad'
                          >


                          </Pies>
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