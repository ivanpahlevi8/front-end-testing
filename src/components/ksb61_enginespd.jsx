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

function KSB61EngineSpeed(){
    console.log("inititated2");
    const [dataSet, setDataSet] = useState(null);
    const [dataDate, setDataDate] = useState(null);
    const [dateOnly, setDateOnly] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function fetchData() {
          try {
            console.log('Starting fetching speed data...');
            const data = await fetch('http://10.23.107.201:3030/speed-data-date?table=tb_ksb61').then(data => data.json());
            console.log("Inside fetch data");
            const getDataValue = data.data_speed;
            const getDataDate = data.data_time;
            const getDateOnly = data.date;
            setDataSet(getDataValue);
            setDataDate(getDataDate);
            setDateOnly(getDateOnly);
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
      <div class="text-center p-10">
        <div class="spinner-border text-primary" role="status">
        </div>
        <h3>Loading...</h3>
      </div>
      </>
      );
    }

    if (error) {
    return <div>Error: {error.message}</div>;
    }

      // fifth graph engine_speed
    console.log("intitating speed graph data");
    // cretae array for key of objecy
    var arrKey5 = dataDate;

    // create array for value of object
    var arrVal5 = dataSet;

    // assign ket array to labels
    const labels5 = arrKey5;

    const data5 = {
        labels: labels5,
        datasets: [
            {
              pointRadius: 0,
              spanGaps: true,
              label: "Engine Speed(RPM)",
              backgroundColor: "rgb(0, 0, 180)",
              borderColor: "rgb(0, 0, 180)",
              data: arrVal5,
            },
        ],
        };

        const option5 = {
            animation: false,
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 0,
                    max: 1800,
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
          },
        }

    console.log("intitating speed graph view");

    return (
        <Line data={data5} options={option5}/>
    )
}

export default KSB61EngineSpeed