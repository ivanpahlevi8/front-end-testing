import React, { useEffect, useState } from "react";
import Chart                          from "chart.js/auto";
import { Line }                       from "react-chartjs-2";

// create value for maximum value of graph
var maxEngineLoad = 120;

function KSB61EngineLoad({url}){
    console.log("inititated2");
    const [dataSet, setDataSet] = useState(null);
    const [dataDate, setDataDate] = useState(null);
    const [dateOnly, setDateOnly] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // profile parameters
    const [biggestValue, setBiggestValue] = useState(0);
    const [smallestValue, setSmallestValue] = useState(0);
    const [averageValue, setAverageValue] = useState(0.0);


    useEffect(() => {
        async function fetchData() {
          try {
            console.log('Startuing fetching2');
            const data = await fetch(url).then(data => data.json());
            console.log("Inside fetch data");

            // get value
            const getDataValue = data.data_load;
            const getDataDate = data.data_time;
            const getDateOnly = data.date;

            // get profile value
            const getSmallestValue = data.smallest_value;
            const getBiggestValue = data.biggest_value;
            const getAverageValue = data.average_value;
            
            // set value
            setDataSet(getDataValue);
            setDataDate(getDataDate);
            setDateOnly(getDateOnly);
            setLoading(false);

            // set profile parameters
            setSmallestValue(getSmallestValue)
            setBiggestValue(getBiggestValue)
            setAverageValue(getAverageValue)

            if(maxEngineLoad < getBiggestValue) {
                maxEngineLoad = getBiggestValue;
            }

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
        <div className="card position-relative" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
        <div className="position-absolute bottom-50 end-50 translate-middle">
          <div className="spinner-grow" role="status">
          </div>
          <h3 >Loading...</h3>
        </div>
      </div>
        </>
        );
    }

    if (error) {
    return <div>Error: {error.message}</div>;
    }

    // sixth graph engine_load
    console.log("intitating engine load graph data");
    // cretae array for key of objecy
    var arrKey6 = dataDate;

    // create array for value of object
    var arrVal6 = dataSet;

    // assign ket array to labels
    const labels6 = arrKey6;

    const data6 = {
        labels: labels6,
        datasets: [
            {
                pointRadius: 0,
                spanGaps: true,
                label: "Engine Load(%)",
                backgroundColor: "rgb(0, 82, 165)",
                borderColor: "rgb(0, 82, 165)",
                data: arrVal6,
            },
        ],
        };

        const option6 = {
            animation: false,
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 0,
                    max: maxEngineLoad,
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

    console.log("intitating engine load graph view");

    return (
        <>
            <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                <div className="card-body p-0">
                    <Line data={data6} options={option6}/>
                </div>
                <div className="card-footer border-top-0 mt-0">
                    <p className="me-2" style={{display: "inline"}}>Average : <b>{averageValue}</b></p>
                    <p className="me-2" style={{display: "inline"}}>Biggest Value : <b>{biggestValue}</b></p>
                    <p style={{display: "inline"}}>Smallest Value : <b>{smallestValue}</b></p>
                </div>
            </div>
        </>
    )
}

export default KSB61EngineLoad
