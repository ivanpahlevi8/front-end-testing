import React, { useEffect, useState } from "react";
import FlowPagination from "./flow_pagination";
import PressPagination from "./press_pagination";
import TempPagination from "./temp_pagination";
import EngineSpeedPagination from "./enginespeed_pagination";
import EngineLoadPagination from "./engineload_pagination";
import FuelRatePagination from "./fuelrate_pagination";

function Graph5(){
    return (
        <div className="container-fluid" style={{backgroundColor: '86A7FC'}}>
            <div className="row g-0 mt-2">
                <div className="col-sm" style={{margin: 2}}>
                </div>
                <div className="col-sm d-flex justify-content-center">
                    <div className="card p-2">
                        <h2>KSB61 -- ISPD200 -- PT.AMNT</h2>
                    </div>
                </div>
                <div className="col-sm" style={{margin: 2}}>
                </div>
            </div>
            <div className="row g-0 mt-2">
                <div className="col-sm" style={{margin: 2}}>
                    <FlowPagination url={'http://ksb-iot.intranet:3030/pag/flow-data?table=tb_ksb61'}/>
                </div>
                <div className="col-sm" style={{margin: 2}}>
                    <PressPagination url={'http://ksb-iot.intranet:3030/pag/press-data?table=tb_ksb61'}/>
                </div>
                <div className="col-sm" style={{margin: 2}}>
                    <TempPagination url={'http://ksb-iot.intranet:3030/pag/temp-data?table=tb_ksb61'}/>
                </div>
            </div>
            <div className="row g-0 mt-2">
                <div className="col-sm" style={{margin: 2}}>
                    <EngineSpeedPagination url={'http://ksb-iot.intranet:3030/pag/speed-data?table=tb_ksb61'}/>
                </div>
                <div className="col-sm" style={{margin: 2}}>
                    <EngineLoadPagination url={'http://ksb-iot.intranet:3030/pag/load-data?table=tb_ksb61'}/>
                </div>
                <div className="col-sm" style={{margin: 2}}>
                    <FuelRatePagination url={'http://ksb-iot.intranet:3030/pag/fuel-data?table=tb_ksb61'}/>
                </div>
            </div>
        </div>
    );
}
export default Graph5