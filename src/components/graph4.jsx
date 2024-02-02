
function Graph3(){
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
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                        <div className="card-body p-0">
                            <KSB61Flow url={'http://localhost:3030/real/flow-data?table=tb_ksb60'}/>
                        </div>
                    </div>
                </div>
                <div class="col-sm" style={{margin: 2}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                            <div className="card-body p-0">
                            <KSB61Pressure url={'http://localhost:3030/real/press-data?table=tb_ksb60'}/>
                            </div>
                        </div>
                    </div>
                <div class="col-sm no-gutters" style={{margin: 2}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                        <div className="card-body p-0">
                            <KSB61Temp url={'http://localhost:3030/real/temp-data?table=tb_ksb60'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-0">
                <div class="col-sm" style={{margin: 2}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px'}}>
                        <div className="card-body p-0">
                            <KSB61EngineSpeed url={'http://localhost:3030/real/speed-data?table=tb_ksb60'}/>
                        </div>
                    </div>
                </div>
                <div class="col-sm" style={{margin: 2}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                        <div className="card-body p-0">
                            <KSB61EngineLoad url={'http://localhost:3030/real/load-data?table=tb_ksb60'}/>
                        </div>
                    </div>
                </div>
                <div class="col-sm" style={{margin: 2}}>
                    <div className="card" style={{backgroundColor: 'red500', height: '500px', width: '100%'}}>
                        <div className="card-body p-0">
                            <KSB61EngineFuelRate url={'http://localhost:3030/real/fuel-data?table=tb_ksb60'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}