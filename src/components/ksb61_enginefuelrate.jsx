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

function KSB61EngineFuelRate(){
    console.log("inititated2");
    const [dataSet, setDataSet] = useState(null);
    const [dataDate, setDataDate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function fetchData() {
          try {
            console.log('Starting fetching engine fuel rate dara');
            const data = await fetch('http://10.23.104.222:3030/fuel-data?table=tb_ksb61').then(data => data.json());
            console.log("Inside fetch data");
            const getDataValue = data.data_fuel;
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
      }, []);

    
    if (loading) {
    return <div>Loading...</div>;
    }

    if (error) {
    return <div>Error: {error.message}</div>;
    }

    // seventh graph engine_fuel_rate
    console.log("intitating fuel rate graph data");
    // cretae array for key of objecy
    var arrKey7 = dataDate;

    // create array for value of object
    var arrVal7 = dataSet;

    // assign ket array to labels
    const labels7 = arrKey7;

    const data7 = {
        labels: labels7,
        datasets: [
            {
            label: "Engine Fuel Rate(L/h)",
            backgroundColor: "rgb(0, 0, 180)",
            borderColor: "rgb(0, 0, 180)",
            data: arrVal7,
            },
        ],
        };

    
        const option7 = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 0,
                    max: 100,
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

    console.log("intitating fuel rate graph view");

    return (
        <Line data={data7} options={option7}/>
    )
}

export default KSB61EngineFuelRate