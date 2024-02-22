import React, { useEffect, useState } from "react";
import KSB61Flow                      from "./ksb61_flow";
import KSB61Pressure                  from "./ksb61_pressure";
import KSB61Temp                      from "./ksb61_temp";
import KSB61EngineSpeed               from "./ksb61_enginespd";
import KSB61EngineLoad                from "./ksb61_engineload";
import KSB61EngineFuelRate            from "./ksb61_enginefuelrate";


function Graph() {
    return (
        <div className="container-fluid" style={{backgroundColor: '86A7FC'}}>
            <div className="row g-0 mt-2">
                <div className="col-sm" style={{margin: 2}}>
                </div>
                <div className="col-sm d-flex justify-content-center">
                    <div className="card p-2">
                        <h2>KSB60 -- LSA2HF -- PT.PAMA</h2>
                    </div>
                </div>
                <div className="col-sm" style={{margin: 2}}>
                </div>
            </div>
            <div className="row g-0 mt-2">
                <div className="col-sm" style={{margin: 2}}>
                    <KSB61Flow url={'http://ksb-iot.intranet:3030/flow-data-date?table=tb_ksb60'}/>
                </div>
                <div class="col-sm" style={{margin: 2}}>
                    <KSB61Pressure url={'http://ksb-iot.intranet:3030/press-data-date?table=tb_ksb60'}/>
                </div>
                <div class="col-sm no-gutters" style={{margin: 2}}>
                    <KSB61Temp url={'http://ksb-iot.intranet:3030/temp-data-date?table=tb_ksb60'}/>
                </div>
            </div>
            <div class="row g-0">
                <div class="col-sm" style={{margin: 2}}>
                    <KSB61EngineSpeed url={'http://ksb-iot.intranet:3030/speed-data-date?table=tb_ksb60'}/>
                </div>
                <div class="col-sm" style={{margin: 2}}>
                    <KSB61EngineLoad url={'http://ksb-iot.intranet:3030/load-data-date?table=tb_ksb60'}/>
                </div>
                <div class="col-sm" style={{margin: 2}}>
                    <KSB61EngineFuelRate url={'http://ksb-iot.intranet:3030/fuel-data-date?table=tb_ksb60'}/>
                </div>
            </div>
        </div>
    );
}

export default Graph