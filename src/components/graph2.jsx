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

function Graph() {
    const [dataSet, setDataSet] = useState([]);
    useEffect(()=>{
        var request = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json',
            },
        };
        
        //console.log("Before do fetching")
        fetch("http://10.23.104.222:3030/all-data?table=tb_ksb61", request)
            .then(res => res.json())
            .then(function(res){
                console.log("Inside fetch")
                // test to print data
                var ok = res.ok 
                var getData = res.data

                // assign value from response
                getMaxValueFlow = res.max_flow;
                getMaxValuePressure = res.max_discharge_pressure;
                getMaxTemp = res.max_pump_de_temperature;
                getMaxFuelRate = res.max_engine_speed;
                getMaxEngineSpeed = res.max_engine_load;
                getMaxEngineLoad= res.max_engine_fuel_rate;

                // check data
                if(getMaxValueFlow > 800) {
                    maxValueFlow = 2000;
                }
    
                // set data from dataset
                var data = [];

                // status okay
                for (let i = 0; i < getData.length; i++) {
                    data = [...data, getData[i]];
                }

                setDataSet(data);
                // console.log("Data get : ");
                // console.log(dataSet);
            });
    }, dataSet);

    

    //console.log("get data set value only : ", Object.entries(dataSet));

    // set data set only for last 5
    dataSet.slice(Math.max(dataSet.length - 5, 1))

    // console.log("data set change : ")
    // console.log(dataSet);

    // cretae array for key of objecy
    var arrKey = [];
    for(let i = dataSet.length - 1; i > 0; i--){
        let getStr = dataSet[i].time.toString();
        year = getStr.substring(0, getStr.indexOf("-"))
        arrKey = [...arrKey, getStr.substring(getStr.indexOf("-")+1, getStr.indexOf("."))]
    }

    // create array for value of object
    var arrVal = [];

    // assign ket array to labels
    const labels = arrKey;

    for (let i = dataSet.length - 1; i > 0; i--) {
        arrVal = [...arrVal, dataSet[i].flow];
    }

    // console.log("Arr val get : ");
    // console.log(arrVal);

    const data = {
    labels: labels,
    datasets: [
        {
        label: "Flows",
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

    // second graph discharge pressure
    // cretae array for key of objecy
    var arrKey2 = [];
    for(let i = dataSet.length - 1; i > 0; i--){
        let getStr = dataSet[i].time.toString();
        arrKey2 = [...arrKey2, getStr.substring(getStr.indexOf("-")+1, getStr.indexOf("."))]
    }

    // create array for value of object
    var arrVal2 = [];

    // assign ket array to labels
    const labels2 = arrKey2;

    for (let i = dataSet.length - 1; i > 0; i--) {
        arrVal2 = [...arrVal2, dataSet[i].discharge_pressure];
    }

    const data2 = {
        labels: labels2,
        datasets: [
            {
            label: "Discharge Pressure",
            backgroundColor: "rgb(0, 0, 180)",
            borderColor: "rgb(0, 0, 180)",
            data: arrVal2,
            },
        ],
        };

        const option2 = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 0,
                    max: 25,
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


    // third graph pump_de_temperature
    // cretae array for key of objecy
    var arrKey3 = [];
    for(let i = dataSet.length - 1; i > 0; i--){
        let getStr = dataSet[i].time.toString();
        arrKey3 = [...arrKey3, getStr.substring(getStr.indexOf("-")+1, getStr.indexOf("."))]
    }

    // create array for value of object
    var arrVal3 = [];

    // assign ket array to labels
    const labels3 = arrKey3;

    for (let i = dataSet.length - 1; i > 0; i--) {
        arrVal3 = [...arrVal3, dataSet[i].pump_de_temperature];
    }

    const data3 = {
        labels: labels3,
        datasets: [
            {
            label: "Pump De Temperature",
            backgroundColor: "rgb(0, 0, 180)",
            borderColor: "rgb(0, 0, 180)",
            data: arrVal3,
            },
        ],
        };

        const option3 = {
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

    
    // fourth graph engine_run_hour
    // cretae array for key of objecy
    var arrKey4 = [];
    for(let i = dataSet.length - 1; i > 0; i--){
        let getStr = dataSet[i].time.toString();
        arrKey4 = [...arrKey4, getStr.substring(getStr.indexOf("-")+1, getStr.indexOf("."))]
    }

    // create array for value of object
    var arrVal4 = [];

    // assign ket array to labels
    const labels4 = arrKey4;

    for (let i = dataSet.length - 1; i > 0; i--) {
        arrVal4 = [...arrVal4, dataSet[i].engine_run_hour];
    }

    const data4 = {
        labels: labels4,
        datasets: [
            {
            label: "Engine Run Hour",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: arrVal4,
            },
        ],
        };


    // fifth graph engine_speed
    // cretae array for key of objecy
    var arrKey5 = [];
    for(let i = dataSet.length - 1; i > 0; i--){
        let getStr = dataSet[i].time.toString();
        arrKey5 = [...arrKey5, getStr.substring(getStr.indexOf("-")+1, getStr.indexOf("."))]
    }

    // create array for value of object
    var arrVal5 = [];

    // assign ket array to labels
    const labels5 = arrKey4;

    for (let i = dataSet.length - 1; i > 0; i--) {
        arrVal5 = [...arrVal5, dataSet[i].engine_speed];
    }

    const data5 = {
        labels: labels5,
        datasets: [
            {
            label: "Engine Speed",
            backgroundColor: "rgb(0, 0, 180)",
            borderColor: "rgb(0, 0, 180)",
            data: arrVal5,
            },
        ],
        };

        const option5 = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 0,
                    max: 1800,
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


    // sixth graph engine_load
    // cretae array for key of objecy
    var arrKey6 = [];
    for(let i = dataSet.length - 1; i > 0; i--){
        let getStr = dataSet[i].time.toString();
        arrKey6 = [...arrKey6, getStr.substring(getStr.indexOf("-")+1, getStr.indexOf("."))]
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
    
    
    // seventh graph engine_fuel_rate
    // cretae array for key of objecy
    var arrKey7 = [];
    for(let i = dataSet.length - 1; i > 0; i--){
        let getStr = dataSet[i].time.toString();
        arrKey7 = [...arrKey7, getStr.substring(getStr.indexOf("-")+1, getStr.indexOf("."))]
    }

    // create array for value of object
    var arrVal7 = [];

    // assign ket array to labels
    const labels7 = arrKey7;

    for (let i = dataSet.length - 1; i > 0; i--) {
        arrVal7 = [...arrVal7, dataSet[i].engine_fuel_rate];
    }

    const data7 = {
        labels: labels7,
        datasets: [
            {
            label: "Engine Fuel Rate",
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
                    max: 120,
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
        <div className="container-fluid" style={{backgroundColor: '86A7FC'}}>
            <div className="row g-0">
                <div className="col-sm" style={{margin: 0}}>
                </div>
                <div className="col-sm d-flex justify-content-center" style={{margin: 0}}>
                    <div className="card ms-7" style={{width: '200px'}}>
                        <h2>KSB-61</h2>
                    </div>
                </div>
                <div className="col-sm" style={{margin: 0}}>
                </div>
            </div>
            <div className="row g-0 mt-2">
                <div className="col-sm" style={{margin: 0}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                        <div className="card-body">
                            <Line data={data} options={option1}/>
                        </div>
                    </div>
                </div>
                <div class="col-sm" style={{margin: 0}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                            <div className="card-body">
                                <Line data={data2} options={option2} />
                            </div>
                        </div>
                    </div>
                <div class="col-sm no-gutters" style={{margin: 0}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                        <div className="card-body">
                            <Line data={data3} options={option3} />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-0">
                <div class="col-sm" style={{margin: 0}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px'}}>
                        <div className="card-body">
                            <Line data={data7} options={option7}/>
                        </div>
                    </div>
                </div>
                <div class="col-sm" style={{margin: 0}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                        <div className="card-body">
                            <Line data={data5} options={option5}/>
                        </div>
                    </div>
                </div>
                <div class="col-sm" style={{margin: 0}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                        <div className="card-body">
                            <Line data={data6} options={option6}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Graph