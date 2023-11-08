import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-Types';
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



export default function Bars({ valores, labels, label, min, max}) {
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
            max : max
        },
        x: {
            ticks: { color: 'rgba(0, 0 ,0 )'}
        }
    }
};

var midata = {
    labels: labels,
    datasets: [
        {
            label: label,
            data: valores,
            backgroundColor: 'rgba(0, 220, 195, 0.7)'
        }
    ]
};
    return <Bar data={midata} options={misoptions} />
}

Bars.propTypes = {
    valores: PropTypes.string.isRequired,
    labels: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    min: PropTypes.number
}