import React, {useState, useEffect} from 'react';

import {Bar} from 'react-chartjs-2';
import {getdata} from '../data/apiData';

const BarChartScreen = () =>{
    const [labelsData, setLabelsData] = useState([]);
    const [confirmedData, setConfirmedData] = useState([]);
    const [deathsData, setDeathsData] = useState([]);

    const data = (canvas) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0,90,100,0);
        gradient.addColorStop(0, '#ff9a9e');
        gradient.addColorStop(0.5, '#fad0c4');
        gradient.addColorStop(1, '#fad0c4');
        
        return{
            labels: [],
            datasets: [{
                barpercentage: 0.5,
                barThickness: 10,
                maxBarThickness: 100,
                minBarLength: 2,
                labels: '',
                data: [],
                backgroundColor: gradient,
                borderWidth: 1
            },
            {
                barpercentage: 0.5,
                barThickness: 10,
                maxBarThickness: 100,
                minBarLength: 2,
                labels: '',
                data: [],
                backgroundColor: gradient
            }]
        }  
    }
    const options ={
        responsive: true,
        tooltips:{
            mode: 'index',
            intersect: false,
        },
        hover:{
            mode: 'nearest',
            intersect: false,
        },
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontColor: 'rgba(242, 38, 19, 1)'
            }
        },
    }
    const getChartData = async () => {
        try{
            let labelsArra = [];
            let confirmedArray = [];
            let deathsArray = [];
            const data = await getdata();
            data.forEach(element => {
    
            });
            console.log(data);
        }catch(e){
            console.log(e);
        }
    }
    
    useEffect(() => {
        getChartData().then(data => Set);
    }, []);
        return(
            <Bar data = {data} options = {options}/>
        )
}

export default BarChartScreen;
