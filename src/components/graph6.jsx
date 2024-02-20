import React, { useEffect, useState } from "react";
import KSB61Flow                      from "./ksb61_flow";
import KSB61Pressure                  from "./ksb61_pressure";
import KSB61Temp                      from "./ksb61_temp";
import KSB61EngineSpeed               from "./ksb61_enginespd";
import KSB61EngineLoad                from "./ksb61_engineload";
import KSB61EngineFuelRate            from "./ksb61_enginefuelrate";


function Graph6() {
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
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                        <div className="card-body p-0">
                            <KSB61Flow url={'http://10.23.107.201:3030/flow-data-date?table=tb_ksb64'}/>
                        </div>
                    </div>
                </div>
                <div class="col-sm" style={{margin: 2}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                            <div className="card-body p-0">
                            <KSB61Pressure url={'http://10.23.107.201:3030/press-data-date?table=tb_ksb64'}/>
                            </div>
                        </div>
                    </div>
                <div class="col-sm no-gutters" style={{margin: 2}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                        <div className="card-body p-0">
                            <KSB61Temp url={'http://10.23.107.201:3030/temp-data-date?table=tb_ksb64'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-0">
                <div class="col-sm" style={{margin: 2}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px'}}>
                        <div className="card-body p-0">
                            <KSB61EngineSpeed url={'http://10.23.107.201:3030/speed-data-date?table=tb_ksb64'}/>
                        </div>
                    </div>
                </div>
                <div class="col-sm" style={{margin: 2}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                        <div className="card-body p-0">
                            <KSB61EngineLoad url={'http://10.23.107.201:3030/load-data-date?table=tb_ksb64'}/>
                        </div>
                    </div>
                </div>
                <div class="col-sm" style={{margin: 2}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                        <div className="card-body p-0">
                            <KSB61EngineFuelRate url={'http://10.23.107.201:3030/fuel-data-date?table=tb_ksb64'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Graph6