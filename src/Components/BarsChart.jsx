import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var beneficios = [72, 56, 20, 36, 80, 40, 30, 24, 55];
var Universidades = ["UDA", "EIA", "POLITECNICO", "UDM", "EAFIT", "UNAL", "ITM", "IUE", "PONTIFICIA"];

var misoptions = {
    responsive : true,
    animation : false,
    plugins : {
        legend : {
            display : false
        }
    },
    scales : {
        y : {
            min : -0,
            max : 250
        },
        x: {
            ticks: { color: 'rgba(0, 0 ,0 )'}
        }
    }
};

var midata = {
    labels: Universidades,
    datasets: [
        {
            label: 'Beneficios',
            data: beneficios,
            backgroundColor: 'rgba(0, 220, 195, 0.7)'
        }
    ]
};

export default function Bars() {
    return <Bar data={midata} options={misoptions} />
}