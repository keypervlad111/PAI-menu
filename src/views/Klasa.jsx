import { useState } from "react";
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Klasa() {
    const years = [2010, 2011, 2012, 2013, 2014, 2015]
    const [DataEmission, SetDataEmission] = useState([
        { liter: 6, price: 5.5, year: 2010 },
        { liter: 5, price: 5.5, year: 2015 },
        { liter: 10, price: 6.2, year: 2010 },
        { liter: 3, price: 5, year: 2013 },
        { liter: 15, price: 5.5, year: 2015 }])

    const [liters, setLiters] = useState(0)
    const [price, setPrice] = useState(0)
    const [year, setYear] = useState(2010)

    function NewData() {
        const car = { liter: liters, price: price, year: year }
        SetDataEmission(prevState => [...prevState, car])
    }
    function Ch() {
        console.log(DataEmission);
    }


    const labels = Array.from(new Set(DataEmission.map(item => item.year))).sort()

    const datasets = labels.map((year) => {
        const CurrentYear = DataEmission.filter(item => item.year === year)
        // console.log(CurrentYear)
        const curr = CurrentYear.map(item => {
            const liter = item.liter;
            console.log(liter + " " + item.year);
        })
        return {
            label: year,
            data: [curr],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    })
    // [
    //     {
    //         label: '2015',
    //         data: labels.map(year => {
    //             const CurrentYear = DataEmission.filter(item => item.year === 2015)
    //             return CurrentYear.map(item => (console.log(item.liter)))
    //         }),
    //     },
    //     {
    //         label: '2014',
    //         data: labels.map(() => [1, 2]),
    //         backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //     },
    // ];

    const data = {
        labels,
        datasets,
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Spalanie Samochodu',
            },
        },
    };

    return (
        <div>
            <h1>CO2 Emision</h1>
            <div>
                Liters per 100 miles
                <input type="number"
                    onChange={(event) => { setLiters(parseFloat(event.target.value)); }}
                />
            </div>
            <div>
                Price per liter (zl)
                <input type="number"
                    onChange={(event) => { setPrice(parseFloat(event.target.value)); }}
                />
            </div>
            <div>
                Vehile production year
                <select onChange={(event) => { setYear(parseInt(event.target.value)); }}>
                    {years.map(year => <option key={year} value={year}>{year}</option>)}
                </select>
            </div>
            <button type="submit" onClick={NewData}>Submit</button>
            <button type="submit" onClick={Ch}>chek</button>

            <Bar options={options} data={data} />;
        </div>
    )
}

export default Klasa;