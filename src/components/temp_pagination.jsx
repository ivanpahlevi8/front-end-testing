import React, { useEffect, useRef, useState } from "react";
import Chart                          from "chart.js/auto";
import { Line }                       from "react-chartjs-2";

// create value for maximum value of graph
var maxValueTemp = 150;

function TempPagination({url}){
    //console.log("inititated");

    const [dataSet, setDataSet] = useState(null);
    const [date, setDate] = useState(null);
    const [dateOnly, setDateOnly] = useState(null)
    const [loading, setLoading] = useState(true);
    const [loadingTxt, setLoadingtxt] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    // create function for back button
    function backButtonClicked(event){
        console.log("back button clicked");
        console.log("page in back button : ", page);
        if(page > 1) {
            setLoadingtxt(true);
            setPage(prevState => {
                return prevState-1;
            })
        }
        fetchData();
    }

    // create function for next button
    function nextButtonClicked(event){
        console.log("next button clicked");
        let getData = page + 1;
        console.log(getData);
        setLoadingtxt(true);
        setPage(prevState => prevState + 1);
        fetchData();
    }

    async function fetchData() {
        console.log("inside fetch data with page : ", page);
        try {
            // create payload request
            const payload = {
                num_data: 100,
                current_page: page, 
            };

            // create json object
            let jsonObj = JSON.stringify(payload);

            // create header
            const myHeader = new Headers();
            myHeader.append("Accept", "application/json");
            myHeader.append("Content-Type", "application/json");

            // create req payload
            var reqPayload = {
                method: "POST",
                headers: myHeader,
                body: jsonObj,
            }

            //console.log('Startuing fetching');
            const data = await fetch(url, reqPayload).then(data => data.json());
            //console.log("Inside fetch data");

            // get value from response
            const getDataValue = data.data_temp;
            const dateValue = data.data_time;
            const getDateOnly = data.date;

            // set value state
            setDataSet(getDataValue);
            setDate(dateValue);
            setDateOnly(getDateOnly)
            setLoading(false);
            setLoadingtxt(false);

            //console.log("set loading to false");
        } catch (error) {
          //console.log('error happen');
          //console.log(error);
          setError(error);
          setLoading(false);
          setLoadingtxt(false);
        }
    }

    useEffect(() => {
        fetchData();
      }, [page]);

    
    if (loading) {
    return (
      <>
      <div className="card position-relative" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
        <div className="position-absolute bottom-50 end-50 translate-middle">
          <div className="spinner-grow" role="status">
          </div>
          <h3 >Loading...</h3>
        </div>
        <div className="card-footer border-top-0 mt-0">
              <a id="backBtn" className="" href="#" style={{display: "inline"}}></a>
              <a id="nextBtn" className="" href="#" style={{display: "inline"}}></a>
          </div>
      </div>
      </>
      );
    }

    if (error) {
    return <div>Error: {error.message}</div>;
    }

    // cretae array for key of objecy
    //console.log("intitating flow graph data");
    console.log("page current : ", page);
    var arrKey = date;
    // console.log('get date');
    // console.log(date);

    // create array for value of object
    var arrVal = dataSet;

    // assign ket array to labels
    const labels = arrKey;

    const data = {
    labels: labels,
    datasets: [
        {
          pointRadius: 0,
          spanGaps: true,
          label: "Flows (m3/h)",
          backgroundColor: "rgb(0, 82, 165)",
          borderColor: "rgb(0, 82, 165)",
          data: arrVal,
        },
    ],
    };

    const option1 = {
      animation: false,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
          y: {
              min: 0,
              max: maxValueTemp,
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

    console.log("intitating flow graph view");

    return (
      <>
      <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
          <div className="card-body p-0">
              <Line data={data} options={option1}/>
          </div>
          <div className="card-footer border-top-0 mt-0">
              <a id="backBtn" className="btn btn-primary me-5" href="#" style={{display: "inline"}} onClick={
                ()=>{
                    nextButtonClicked();
                }
              }>&lt;</a>
              {loadingTxt === true ? <div className="spinner-grow" role="status"></div>:page}
              <a id="nextBtn" className="btn btn-primary ms-5" href="#" style={{display: "inline"}} onClick={
                ()=>{
                    backButtonClicked();
                }
              }>&gt;</a>
          </div>
      </div>
  </>
    )
}

export default TempPagination
