import React, { useEffect, useState } from "react";
import { Line }                       from "react-chartjs-2";


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
        fetch("http://10.23.104.222:3030/all-data?table=tb_ksb60", request)
            .then(res => res.json())
            .then(function(res){
                console.log("Inside fetch")
                // test to print data
                var ok = res.ok 
                var getData = res.data
    
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
        arrKey = [...arrKey, dataSet[i].time]
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
        label: "Flows Value",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: arrVal,
        },
    ],
    };

    // second graph discharge pressure
    // cretae array for key of objecy
    var arrKey2 = [];
    for(let i = dataSet.length - 1; i > 0; i--){
        arrKey2 = [...arrKey2, dataSet[i].time]
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
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: arrVal2,
            },
        ],
        };


    // third graph pump_de_temperature
    // cretae array for key of objecy
    var arrKey3 = [];
    for(let i = dataSet.length - 1; i > 0; i--){
        arrKey3 = [...arrKey3, dataSet[i].time]
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
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: arrVal3,
            },
        ],
        };

    
    // fourth graph engine_run_hour
    // cretae array for key of objecy
    var arrKey4 = [];
    for(let i = dataSet.length - 1; i > 0; i--){
        arrKey4 = [...arrKey4, dataSet[i].time]
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
        arrKey5 = [...arrKey5, dataSet[i].time]
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
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: arrVal5,
            },
        ],
        };


    // sixth graph engine_load
    // cretae array for key of objecy
    var arrKey6 = [];
    for(let i = dataSet.length - 1; i > 0; i--){
        arrKey6 = [...arrKey6, dataSet[i].time]
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
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: arrVal6,
            },
        ],
        };
    
    
    // seventh graph engine_fuel_rate
    // cretae array for key of objecy
    var arrKey7 = [];
    for(let i = dataSet.length - 1; i > 0; i--){
        arrKey7 = [...arrKey7, dataSet[i].time]
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
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: arrVal,
            },
        ],
        };
    


    return (
        <div className="container-fluid">
            
            <div class="row g-0">
                <div class="col-sm">
                    <Line data={data} />
                </div>
                <div class="col-sm">
                    <Line data={data2} />
                </div>
                <div class="col-sm">
                    <Line data={data3} />
                </div>
            </div>
            <div class="row g-0">
                <div class="col-sm">
                    <Line data={data5} />
                </div>
                <div class="col-sm">
                    <Line data={data6} />
                </div>
                <div class="col-sm">
                    <Line data={data7} />
                </div>
            </div>
        </div>
    );
}

export default Graph