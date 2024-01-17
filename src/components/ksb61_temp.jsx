import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

var year = "";

// create value for maximum value of graph
var maxValueFlow = 800;
var maxValuePressure = 25;
var maxValuePumpDeTemperature = 200;
var maxValueEngineFuelRate= 500;
var maxEngineSpeed = 2000;
var maxEngineLoad = 150;

// create variable to get value from response
var getMaxValueFlow = 0;
var getMaxValuePressure = 0;
var getMaxTemp = 0;
var getMaxFuelRate = 0;
var getMaxEngineSpeed = 0;
var getMaxEngineLoad= 0;

function KSB61Temp(){
    console.log("inititated");
    const [dataSet, setDataSet] = useState(null);
    const [dataDate, setDataDate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function fetchData() {
          try {
            console.log('Starting fetching temperature data');
            const data = await fetch('http://10.23.104.222:3030/temp-data?table=tb_ksb61').then(data => data.json());
            console.log("Inside fetch data");
            const getDataValue = data.data_temp;
            const getDataDate = data.data_time;
            setDataSet(getDataValue);
            setDataDate(getDataDate);
            setLoading(false);
            console.log("set loading to false");
          } catch (error) {
            console.log('error happen');
            console.log(error);
            setError(error);
            setLoading(false);
          }
        }
    
        fetchData();
      }, [dataSet]);

    
    if (loading) {
    return <div>Loading...</div>;
    }

    if (error) {
    return <div>Error: {error.message}</div>;
    }

    // third graph pump_de_temperature
    console.log("intitating third graph data");
    // cretae array for key of objecy
    var arrKey3 = dataDate;

    // create array for value of object
    var arrVal3 = dataSet;

    // assign ket array to labels
    const labels3 = arrKey3;

    const data3 = {
        labels: labels3,
        datasets: [
            {
                pointRadius: 0,
                spanGaps: true,
                label: "Pump De Temperature (°C)",
                backgroundColor: "rgb(0, 0, 180)",
                borderColor: "rgb(0, 0, 180)",
                data: arrVal3,
            },
        ],
        };

        const option3 = {
            animation: false,
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 0,
                    max: 200,
                    ticks: {
                        
                    }
                  },
                x: {
                title: {
                    display: true,
                    text: year,
                    font:{
                        weight: 'bold'
                    },
                },
                ticks: {
                    font:{
                        weight: 'bold'
                    },
                    autoSkip: true,
                    maxRotation: 90,
                    minRotation: 90
                }
                }
            },
        }

    console.log("intitating third graph view");

    return (
        <Line data={data3} options={option3} />
    )
}

export default KSB61Temp