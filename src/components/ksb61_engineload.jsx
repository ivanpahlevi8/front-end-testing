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

function KSB61EngineLoad(){
    console.log("inititated2");
    const [dataSet, setDataSet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function fetchData() {
          try {
            console.log('Startuing fetching2');
            const data = await fetch('http://10.23.104.222:3030/all-data?table=tb_ksb61').then(data => data.json());
            console.log("Inside fetch data");
            const getDataValue = data.data;
            setDataSet(getDataValue);
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

    // sixth graph engine_load
    console.log("intitating sixth graph");
    // cretae array for key of objecy
    var arrKey6 = [];
    for(let i = dataSet.length - 1; i > 0; i--){
        let getStr = dataSet[i].time.toString();
        arrKey6 = [...arrKey6, getStr]
    }

    // create array for value of object
    var arrVal6 = [];

    // assign ket array to labels
    const labels6 = arrKey6;

    for (let i = dataSet.length - 1; i > 0; i--) {
        arrVal6 = [...arrVal6, dataSet[i].engine_load];
    }

    const data6 = {
        labels: labels6,
        datasets: [
            {
            label: "Engine Load",
            backgroundColor: "rgb(0, 0, 180)",
            borderColor: "rgb(0, 0, 180)",
            data: arrVal6,
            },
        ],
        };

        const option6 = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 0,
                    max: 150,
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

    return (
        <Line data={data6} options={option6}/>
    )
}

export default KSB61EngineLoad