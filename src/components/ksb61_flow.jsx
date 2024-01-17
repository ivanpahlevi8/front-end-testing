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

function KSB61Flow(){
    console.log("inititated");
    const [dataSet, setDataSet] = useState(null);
    const [date, setDate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function fetchData() {
          try {
            console.log('Startuing fetching');
            const data = await fetch('http://10.23.104.222:3030/flow-data?table=tb_ksb61').then(data => data.json());
            console.log("Inside fetch data");
            const getDataValue = data.data_flow;
            const dateValue = data.data_time;
            setDataSet(getDataValue);
            setDate(dateValue);
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

    // cretae array for key of objecy
    console.log("intitating flow graph data");
    var arrKey = date;
    console.log('get date');
    console.log(date);

    // create array for value of object
    var arrVal = dataSet;

    // assign ket array to labels
    const labels = arrKey;

    const data = {
    labels: labels,
    datasets: [
        {
        label: "Flows (m3/h)",
        backgroundColor: "rgb(0, 0, 180)",
        borderColor: "rgb(0, 0, 180)",
        data: arrVal,
        },
    ],
    };

    const option1 = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                min: 0,
                max: maxValueFlow,
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

    console.log("intitating flow graph view");

    return (
        <Line data={data} options={option1}/>
    )
}

export default KSB61Flow