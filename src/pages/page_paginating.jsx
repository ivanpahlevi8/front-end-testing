/**
 * PAGE FOR PROCESSING PAGINATING DATA
 */

import FlowPagination from "../components/flow_pagination";
import PressPagination from "../components/press_pagination";
import TempPagination from "../components/temp_pagination";
import EngineSpeedPagination from "../components/enginespeed_pagination";
import EngineLoadPagination from "../components/engineload_pagination";
import FuelRatePagination from "../components/fuelrate_pagination";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import user_session from "../components/user_session";
import UserSession from "../components/user_session";

function PaginatingPage(){
    // create state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dataResponse, setDataResponse] = useState(null);

    // get react router parameter
    const {tableName, unitName, pumpLable, customerLable} = useParams();

    // create async function to fecth unit data
    async function fetchUnitData(){
        try{
            // create header request
            // create header
            const myHeader = new Headers();
            myHeader.append("Accept", "application/json");
            myHeader.append("Content-Type", "application/json");

            // create req payload
            var reqPayload = {
                method: "GET",
                headers: myHeader,
            };

            // request to get all unit data
            const response = await fetch("http://ksb-iot.intranet:3030/get-all-unit", reqPayload).then(resp => resp.json());
            var getData = response.data;

            setDataResponse(getData);
            setLoading(false);
        } catch (error){
            setError(true);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUnitData();
      }, []);

    if(loading || error) {
        return <>
            <div className="spinner-grow" role="status">
          </div>
          <h3 >Loading...</h3>
        </>;
    }

    console.log("get user session : ", UserSession.getIsAuthenticated());

    console.log(dataResponse);


    return (
        <div className="container-fluid" style={{backgroundColor: '86A7FC'}}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light mt-2">
            <div class="container-fluid">
                <img src="https://companieslogo.com/img/orig/KSB.NS-520c52e8.png?t=1604232065" alt="" width="30" height="30" class="d-inline-block align-text-top"/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Real Time
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            {dataResponse.map(function(object, i){
                                var dataLink = "/real/"+dataResponse[i].table_name+"/"+dataResponse[i].unit_name+"/"+dataResponse[i].pump_lable+"/";
                                dataLink = dataLink + dataResponse[i].customer_lable;
                                return <li><a class="dropdown-item" href={dataLink}>{dataResponse[i].unit_name}</a></li>
                            })}
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Historical
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            {dataResponse.map(function(object, i){
                                var dataLink = "/histo/"+dataResponse[i].table_name+"/"+dataResponse[i].unit_name+"/"+dataResponse[i].pump_lable+"/";
                                dataLink = dataLink + dataResponse[i].customer_lable;
                                return <li><a class="dropdown-item" href={dataLink}>{dataResponse[i].unit_name}</a></li>
                            })}
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Paginating
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            {dataResponse.map(function(object, i){
                                var dataLink = "/pag/"+dataResponse[i].table_name+"/"+dataResponse[i].unit_name+"/"+dataResponse[i].pump_lable+"/";
                                dataLink = dataLink + dataResponse[i].customer_lable;
                                return <li><a class="dropdown-item" href={dataLink}>{dataResponse[i].unit_name}</a></li>
                            })}
                        </ul>
                    </li>
                    {!UserSession.getIsAuthenticated()? <li className="nav-item"><a className="nav-link" href="/login">Login</a></li> : UserSession.getLevel()===1? 
                        <li className="nav-item"><a className="nav-link" href="/admin">Admin</a>
                    </li> : <li className="nav-item"><a className="nav-link" href="/">Logout</a></li>}
                    <li className="ms-5 me-5"></li>
                    <li className="ms-5 me-5"></li>
                    <li class="nav-item dropdown ms-5">
                        <h2>{unitName + "--" + pumpLable + "--" + customerLable}</h2>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            <div className="row g-0 mt-2">
                <div className="col-sm" style={{margin: 2}}>
                    <FlowPagination url={'http://ksb-iot.intranet:3030/pag/flow-data-date?table=' + tableName}/>
                </div>
                <div className="col-sm" style={{margin: 2}}>
                    <PressPagination url={'http://ksb-iot.intranet:3030/pag/press-data-date?table=' + tableName}/>
                </div>
                <div className="col-sm" style={{margin: 2}}>
                    <TempPagination url={'http://ksb-iot.intranet:3030/pag/temp-data-date?table=' + tableName}/>
                </div>
            </div>
            <div className="row g-0 mt-2">
                <div className="col-sm" style={{margin: 2}}>
                    <EngineSpeedPagination url={'http://ksb-iot.intranet:3030/pag/speed-data-date?table=' + tableName}/>
                </div>
                <div className="col-sm" style={{margin: 2}}>
                    <EngineLoadPagination url={'http://ksb-iot.intranet:3030/pag/load-data-date?table=' + tableName}/>
                </div>
                <div className="col-sm" style={{margin: 2}}>
                    <FuelRatePagination url={'http://ksb-iot.intranet:3030/pag/fuel-data-date?table=' + tableName}/>
                </div>
            </div>
        </div>
    );
}

export default PaginatingPage