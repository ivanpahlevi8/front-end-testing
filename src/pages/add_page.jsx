import AdminComponent from "../components/admin_component"
import Swal from 'sweetalert2'

function AddPage(){
    // create login password
    async function processAdd(tableName, unitName, pumpLable, customerLable){
        // create request object
        var reqObj = {
            "table_name": tableName,
            "unit_name": unitName,
            "pump_lable" : pumpLable,
            "customer_lable" : customerLable,
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
        var response = await fetch('http://ksb-iot.intranet:3030/add-unit', reqPayload).then(resp => resp.json());

        // get response member
        var getStatus = response.status;
        var getMessage = response.message;

        console.log(response);

        // check status
        if(getStatus === false) {
            Swal.fire(
                {
                    title: "Failed Add Unit!!!",
                    text: getMessage,
                    icon: 'error',
                    confirmButtonText: 'OK'
                }
            )
            return 
        }

        // if status okay
        Swal.fire({
            title: "Success Add Unit!!!",
            text: getMessage,
            icon: 'success',
            confirmButtonText: 'OK',
            allowOutsideClick: false
        }).then((result)=>{
            if(result.isConfirmed){
                // navigate to main
                navigate('/admin');
                console.log("navigate to main page...");
            }
        })
    }
    return <>
        <div class="container-fluid">
            <div class="row flex-nowrap">
                <AdminComponent active={1}/>
                <div class="col py-3 ps-5 pe-5" style={{color: "black", backgroundColor: "white"}}>
                    <h1 className="mb-3">Add Unit</h1>
                    <form className="ms-5 me-5">
                        <h3 className="h3 mb-3 fw-normal load">Please Sign In</h3>

                        <div className="form-floating mt-5">
                            <input type="text" className="form-control" id="unitName" placeholder="username"/>
                            <label htmlFor="floatingInput">Unit Name</label>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="text" className="form-control" id="tableName" placeholder="password"/>
                            <label htmlFor="floatingInput">Table Name (tb_...)</label>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="text" className="form-control" id="pumpLable" placeholder="password"/>
                            <label htmlFor="floatingInput">Pump Lable</label>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="text" className="form-control" id="customerLable" placeholder="password"/>
                            <label htmlFor="floatingInput">Customer Lable</label>
                        </div>
                    </form>
                    <button className="w-100 btn btn-lg btn-primary mt-5" onClick={()=>{
                        var getUnitName = document.getElementById("unitName").value;
                        var getTableName = document.getElementById("tableName").value;
                        var getPumpLable = document.getElementById("pumpLable").value;
                        var getCustomerLable = document.getElementById("customerLable").value;

                        // call login function
                        processAdd(getTableName, getUnitName, getPumpLable, getCustomerLable);
                    }}>Add Unit</button>
                </div>
            </div>
        </div>
    </>
}

export default AddPage