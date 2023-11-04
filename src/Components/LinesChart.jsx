import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var beneficios = [72, 56, 20, 36, 80, 40, 30, 24, 55];
var meses = ["UDA", "EIA", "POLITECNICO", "UDM", "EAFIT", "UNAL", "ITM", "IUE", "PONTIFICIA"];

var midata = {
    labels: meses,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Realidad',
            data: beneficios,
            tension: 0.5,
            fill : true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'rgba(255, 99, 132)',
        },
        {
            label: 'Expectativa',
            data: [20, 25, 60, 65, 45, 10, 5, 25, 35]
        },
    ],
};

var misoptions = {
    scales : {
        y : {
            min : 0,
            max: 100
        },
        x: {
            ticks: { color: 'rgb(255, 99, 132)'}
        }
    }
};

export default function LinesChart() {
    return <Line data={midata} options={misoptions}/>
}