import { useParams } from "react-router";
import { json, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

import AdminComponent from "../components/admin_component";

function DeletePageProcess(){
    // get react router parameter
    const {tableName, unitName, pumpLable, customerLable} = useParams();

    // create login password
    async function processDelete(tableName){
        // create request object
        var reqObj = {
            "table_name": tableName,
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
        var response = await fetch('http://10.23.107.201:3030/delete-unit', reqPayload).then(resp => resp.json());

        // get response member
        var statusResp = response.status;
        var levelResp = response.level;
        var messageResp = response.message;

        console.log(response);

        // check status
        if(statusResp === false) {
            Swal.fire(
                {
                    title: "Failed Delete!!!",
                    text: messageResp,
                    icon: 'error',
                    confirmButtonText: 'OK'
                }
            )
            return 
        }

        // if status okay
        Swal.fire({
            title: "Success Login!!!",
            text: messageResp,
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result)=>{
            if(result.isConfirmed){
                // ok button clicked
                // set login session
                UserSession.setIsAuthenticate(true);
                UserSession.setLevel(levelResp);
                console.log(UserSession.getLevel());

                // navigate to main
                navigate('/real/tb_ksb60/KSB60/ISPD200/PT. PAMA');
                console.log("navigate to main page...");
            }
        })
    }

    return <>
        <div class="container-fluid">
            <div class="row flex-nowrap">
                <AdminComponent active={2}/>
                <div class="col py-3 ps-5 pe-5" style={{color: "black", backgroundColor: "white"}}>
                    <h1 className="mb-3">Delete Unit</h1>
                    <form className="ms-5 me-5">
                        <h3 className="h3 mb-3 fw-normal load">Please Sign In</h3>

                        <div className="form-floating mt-5">
                            <input type="text" className="form-control" value={unitName} readonly="readonly"/>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="text" className="form-control" value={tableName} readonly="readonly"/>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="text" className="form-control" value={pumpLable} readonly="readonly"/>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="text" className="form-control" value={customerLable} readonly="readonly"/>
                        </div>
                    </form>
                    <button className="w-100 btn btn-lg btn-danger mt-5" onClick={()=>{
                        Swal.fire({
                            title: "Warning!!!",
                            text: "Are You Sure Want To Delete This Unit ?",
                            icon: 'warning',
                            confirmButtonText: 'OK'
                        }).then((result)=>{
                            if(result.isConfirmed){
                                processDelete(tableName);
                            }
                        })
                    }}>Delete</button>
                </div>
            </div>
        </div>
    </>
}

export default DeletePageProcess;