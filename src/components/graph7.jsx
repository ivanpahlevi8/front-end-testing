import React, { useEffect, useState } from "react";
import KSB61Flow                      from "./ksb61_flow";
import KSB61Pressure                  from "./ksb61_pressure";
import KSB61Temp                      from "./ksb61_temp";
import KSB61EngineSpeed               from "./ksb61_enginespd";
import KSB61EngineLoad                from "./ksb61_engineload";
import KSB61EngineFuelRate            from "./ksb61_enginefuelrate";

function Graph7(){
    return (
        <div className="container-fluid" style={{backgroundColor: '86A7FC'}}>
            <div className="row g-0 mt-2">
                <div className="col-sm" style={{margin: 2}}>
                </div>
                <div className="col-sm d-flex justify-content-center">
                    <div className="card p-2">
                        <h2>KSB64 -- ISPD200</h2>
                    </div>
                </div>
                <div className="col-sm" style={{margin: 2}}>
                </div>
            </div>
            <div className="row g-0 mt-2">
                <div className="col-sm" style={{margin: 2}}>
                    <KSB61Flow url={'http://ksb-iot.intranet:3030/real/flow-data?table=tb_ksb61'}/>
                </div>
                <div class="col-sm" style={{margin: 2}}>
                    <KSB61Pressure url={'http://ksb-iot.intranet:3030/real/press-data?table=tb_ksb61'}/>
                </div>
                <div class="col-sm no-gutters" style={{margin: 2}}>
                    <KSB61Temp url={'http://ksb-iot.intranet:3030/real/temp-data?table=tb_ksb61'}/>
                </div>
            </div>
            <div class="row g-0">
                <div class="col-sm" style={{margin: 2}}>
                    <KSB61EngineSpeed url={'http://ksb-iot.intranet:3030/real/speed-data?table=tb_ksb64'}/>
                </div>
                <div class="col-sm" style={{margin: 2}}>
                    <KSB61EngineLoad url={'http://ksb-iot.intranet:3030/real/load-data?table=tb_ksb64'}/>
                </div>
                <div class="col-sm" style={{margin: 2}}>
                    <KSB61EngineFuelRate url={'http://ksb-iot.intranet:3030/real/fuel-data?table=tb_ksb64'}/>
                </div>
            </div>
        </div>
    );
}
export default Graph7