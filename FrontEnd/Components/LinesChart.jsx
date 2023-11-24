import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
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



export default function LinesChart({ valores,valores2, labels, label, label2, min, max}) {


var midata = {
    labels: labels,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: label,
            data: valores,
            tension: 0.5,
            fill : true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'rgba(255, 99, 132)',
        },
        {
            label: label2,
            data: valores2,
            tension: 0.5,
            fill : true,
            borderColor: 'rgb(25, 99, 132)',
            backgroundColor: 'rgba(25, 99, 132, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(25, 99, 132)',
            pointBackgroundColor: 'rgba(25, 99, 132)',
        },
    ],
};

var misoptions = {
    scales : {
        y : {
            max: max,
            min: min
        },
        x: {
            ticks: { color: 'rgb(255, 99, 132)'}
        }
    }
};
    return <Line data={midata} options={misoptions}/>
}
LinesChart.propTypes = {
    valores: PropTypes.array.isRequired,
    valores2: PropTypes.array,
    labels: PropTypes.array.isRequired,
    label2: PropTypes.string,
    label: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    min: PropTypes.number
};