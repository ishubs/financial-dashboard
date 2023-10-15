import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import './LineChart.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

const LineChart = ({ color, stock_data }) => {
    const averageValue = stock_data.reduce((a, b) => a + b) / stock_data.length;

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Stock Price',
                data: stock_data,
                fill: false,
                borderColor: color,
                showLine: true,
                pointRadius: 0,
                pointStyle: 'none',
                tension: 0.4,
                borderWidth: 2,
            },
            {
                label: 'Average',
                data: new Array(stock_data.length).fill(averageValue),
                fill: false,
                borderColor: 'rgba(0, 0, 0, 0.5)',
                showLine: true,
                pointRadius: 0,
                pointStyle: 'none',
                borderDash: [5, 5],
                tension: 0,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className='line-chart'>
            <Line data={data} options={options} />
        </div>
    );
};

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default LineChart;
