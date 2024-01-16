import React, { useEffect, useState } from "react";
import KSB61Flow from "./ksb61_flow";
import KSB61Pressure from "./ksb61_pressure";
import KSB61Temp from "./ksb61_temp";
import KSB61EngineSpeed from "./ksb61_enginespd";
import KSB61EngineLoad from "./ksb61_engineload";
import KSB61EngineFuelRate from "./ksb61_enginefuelrate";


function Graph() {
    return (
        <div className="container-fluid" style={{backgroundColor: '86A7FC'}}>
            <div className="row g-0 mt-2">
                <div className="col-sm" style={{margin: 0}}>
                </div>
                <div className="col-sm d-flex justify-content-center">
                    <div className="card p-2">
                        <h2>KSB61 -- ISPD200 -- PT.AMNT</h2>
                    </div>
                </div>
                <div className="col-sm" style={{margin: 0}}>
                </div>
            </div>
            <div className="row g-0 mt-2">
                <div className="col-sm" style={{margin: 0}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                        <div className="card-body">
                            <KSB61Flow />
                        </div>
                    </div>
                </div>
                <div class="col-sm" style={{margin: 0}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                            <div className="card-body">
                            <KSB61Pressure />
                            </div>
                        </div>
                    </div>
                <div class="col-sm no-gutters" style={{margin: 0}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                        <div className="card-body">
                        <KSB61Temp />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-0">
                <div class="col-sm" style={{margin: 0}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px'}}>
                        <div className="card-body">
                        <KSB61EngineSpeed />
                        </div>
                    </div>
                </div>
                <div class="col-sm" style={{margin: 0}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                        <div className="card-body">
                        <KSB61EngineLoad />
                        </div>
                    </div>
                </div>
                <div class="col-sm" style={{margin: 0}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                        <div className="card-body">
                        <KSB61EngineFuelRate />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Graph