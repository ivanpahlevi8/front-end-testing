import React, { useEffect, useState } from "react";
import Chart                          from "chart.js/auto";
import { Line }                       from "react-chartjs-2";

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

function KSB61Pressure({url}){
    console.log("inititated2");
    const [dataSet, setDataSet] = useState(null);
    const [dataDate, setDataDate] = useState(null);
    const [dateOnly, setDateOnly] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function fetchData() {
          try {
            console.log('Starting fetching pressure data');
<<<<<<< HEAD
            const data = await fetch('http://10.23.104.222:3030/press-data-date?table=tb_ksb61').then(data => data.json());
=======
            const data = await fetch(url).then(data => data.json());
>>>>>>> 29ab3fa47ae5e6f868846681ffe324ea37c618c0
            console.log("Inside fetch data");
            const getDataValue = data.data_press;
            const getDate = data.data_time;
            const getDateOnly = data.date;
            setDataSet(getDataValue);
            setDataDate(getDate);
            setDateOnly(getDateOnly)
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
    return (
      <>
      <div class="spinner-grow mt-10" role="status">
        </div>
        <h3>Loading...</h3>
      </>
      );
    }

    if (error) {
    return <div>Error: {error.message}</div>;
    }

     // second graph discharge pressure
     console.log("intitating pressure data graph");
     // cretae array for key of objecy
     var arrKey2 = dataDate;
 
     // create array for value of object
     var arrVal2 = dataSet;
 
     // assign ket array to labels
     const labels2 = arrKey2;
 
     const data2 = {
         labels: labels2,
         datasets: [
             {
                pointRadius: 0,
                spanGaps: true,
                label: "Discharge Pressure(bar)",
                backgroundColor: "rgb(0, 82, 165)",
                borderColor: "rgb(0, 82, 165)",
                data: arrVal2,
             },
         ],
         };
 
         const option2 = {
             animation: false,
             responsive: true,
             maintainAspectRatio: false,
             scales: {
                 y: {
                     min: 0,
                     max: 25,
                     ticks: {
                        font: {
                            size: 20,
                            weight: 'bold',
                        }
                     }
                   },
                 x: {
                    ticks: {
                        font:{
                            weight: 'bold'
                        },
                        autoSkip: true,
                        maxRotation: 90,
                        minRotation: 90,
                        callback: function(label) {
                          let realLabel = this.getLabelForValue(label)
                          var time = realLabel.split(" ")[1];
                          return time;
                        }
                    }
                  },
                  xAxis2: {
                    type: "category",
                    grid: {
                      drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                    labels: dateOnly,
                  },
              },
              plugins: {
                legend: {
                  labels: {
                    font: {
                      size: 20,
                      weight: 'bold',
                    }
                  }
                }
              }
        }
        
    console.log("intitating pressure graph view");
    return (
        <Line data={data2} options={option2} />
    )
}

export default KSB61Pressure
