import React, { useEffect, useState } from "react";
import FlowPagination from "./flow_pagination";

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
                    <FlowPagination url={'http://localhost:3030/pag/flow-data?table=tb_ksb60'}/>
                </div>
            </div>
        </div>
    );
}
export default Graph5