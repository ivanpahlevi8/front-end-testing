import { useParams } from "react-router";
import { json, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

import AdminComponent from "../components/admin_component";

function UpdatePageProcess(){
    // get react router parameter
    const {tableName, unitName, pumpLable, customerLable} = useParams();

    // create login password
    async function processUpdate(tableName, unitName, pumpLable, customerLable){
        // create request object
        var reqObj = {
            "table_name": tableName,
            "unit_name" : unitName,
            "pump_lable" : pumpLable,
            "customer_lable" : customerLable
        };

        // create json object
        let jsonObj = JSON.stringify(reqObj);

        // create header
        const myHeader = new Headers();
        myHeader.append("Accept", "application/json");
        myHeader.append("Content-Type", "application/json");

        // create request payload
        var reqPayload = {
            method: "POST",
            headers: myHeader,
            body: jsonObj,
        };

        // do request
        var response = await fetch('http://10.23.107.201:3030/update-unit', reqPayload).then(resp => resp.json());

        // get response member
        var statusResp = response.status;
        var levelResp = response.level;
        var messageResp = response.message;

        console.log(response);

        // check status
        if(statusResp === false) {
            Swal.fire(
                {
                    title: "Failed Update!!!",
                    text: messageResp,
                    icon: 'error',
                    confirmButtonText: 'OK'
                }
            )
            return 
        }

        // if status okay
        Swal.fire({
            title: "Success Update!!!",
            text: messageResp,
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result)=>{
            if(result.isConfirmed){
                // ok button clicked
                // navigate to main
                navigate('/admin');
                console.log("navigate to main page...");
            }
        })
    }

    return <>
        <div class="container-fluid">
            <div class="row flex-nowrap">
                <AdminComponent active={3}/>
                <div class="col py-3 ps-5 pe-5" style={{color: "black", backgroundColor: "white"}}>
                    <h1 className="mb-3">Update Unit</h1>
                    <form className="ms-5 me-5">
                        <div className="form-floating mt-5">
                            <input type="text" className="form-control" defaultValue={unitName} id="unit_name"/>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="text" className="form-control" defaultValue={tableName} id="table_name"/>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="text" className="form-control" defaultValue={pumpLable} id="pump_lable"/>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="text" className="form-control" defaultValue={customerLable} id="customer_lable"/>
                        </div>
                    </form>
                    <button className="w-100 btn btn-lg btn-warning mt-5" onClick={()=>{
                        Swal.fire({
                            title: "Warning!!!",
                            text: "Are You Sure Want To Delete This Unit ?",
                            icon: 'warning',
                            confirmButtonText: 'OK'
                        }).then((result)=>{
                            if(result.isConfirmed){
                                var getInputUnitName = document.getElementById("unit_name").value;
                                var getInputTableName = document.getElementById("table_name").value;
                                var getInputPumpLable = document.getElementById("pump_lable").value;
                                var getInputCustomerLable = document.getElementById("customer_lable").value;
                                processUpdate(getInputTableName, getInputUnitName, getInputPumpLable, getInputCustomerLable);
                            }
                        })
                    }}>Update</button>
                </div>
            </div>
        </div>
    </>
}

export default UpdatePageProcess;