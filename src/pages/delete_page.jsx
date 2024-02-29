import { useEffect, useRef, useState } from "react";
import AdminComponent from "../components/admin_component"

function DeletePage(){
    const [dataResponse, setDataResponse] = useState(null);
    const [dataLength, setDataLength] = useState(null);
    const [allDataNum, setAllDataNum] = useState(null);
    const Ref = useRef(this);
    // create async function to fecth unit data
    async function fetchUnitData(){
        try{
            // create header request
            // create header
            const myHeader = new Headers();
            myHeader.append("Accept", "application/json");
            myHeader.append("Content-Type", "application/json");

            // create req payload
            var reqPayload = {
                method: "GET",
                headers: myHeader,
            };

            // request to get all unit data
            const response = await fetch("http://10.23.107.201:3030/get-all-unit", reqPayload).then(resp => resp.json());
            var getData = response.data;

            // get len data
            var dataLen = getData.length;

            console.log(getData);

            // get num row
            var numRow = Math.ceil(dataLen / 3);

            console.log("Num row : ", numRow);

            setDataResponse(getData);
            setAllDataNum(dataLen);
            setDataLength(Number(numRow));
        } catch (error){
            console.log("error happen : ", error);
        }
    }

    useEffect(() => {
        fetchUnitData();
        
        // return object
    var returnObj = "";
    var k = 0;
    var dataLengtAll = allDataNum;

    returnObj += `<table>`

    // loop through all row
    for(let i = 0; i < dataLength; i++){
        returnObj += `
        <tr>
        `;

        if(dataLengtAll > 2) {
            // loop throuh column
            for(let j = 0; j < 3; j++) {
                // get object parameter
                var getUnitName = dataResponse[k].unit_name;
                var getUnitTable = dataResponse[k].table_name;
                var getUnitPumpLable = dataResponse[k].pump_lable;
                var getUnitCustomerLable = dataResponse[k].customer_lable;

                returnObj += `
                <td>
                    <div class="card" style={{width: "20rem", height: "20rem"}}>
                        <img class="card-img-top" src="https://picsum.photos/200" alt="Card image cap" height="300px"/>
                        <div class="card-body">
                            <h5 class="card-title">${getUnitName}</h5>
                            <p class="card-text">Pump Data Name : ${getUnitPumpLable}</p>
                            <p class="card-text">Customer Data Name : ${getUnitCustomerLable}</p>
                            <p class="card-text">Table Data Name : ${getUnitTable}</p>
                            <a href="/admin/delete/${getUnitTable}/${getUnitName}/${getUnitPumpLable}/${getUnitCustomerLable}" class="btn btn-danger">DELETE</a>
                        </div>
                    </div>
                </td>
                `;
                k++;
                dataLengtAll--;
            }
        } else {
            for(let j = 0; j < dataLengtAll; j++){
                // get object parameter
                var getUnitName = dataResponse[k].unit_name;
                var getUnitTable = dataResponse[k].table_name;
                var getUnitPumpLable = dataResponse[k].pump_lable;
                var getUnitCustomerLable = dataResponse[k].customer_lable;
    
                returnObj += `
                <td>
                    <div class="card" style={{width: "20rem", height: "20rem"}}>
                        <img class="card-img-top" src="https://picsum.photos/200" alt="Card image cap" height="300px"/>
                        <div class="card-body">
                            <h5 class="card-title">${getUnitName}</h5>
                            <p class="card-text">Pump Data Name : ${getUnitPumpLable}</p>
                            <p class="card-text">Customer Data Name : ${getUnitCustomerLable}</p>
                            <p class="card-text">Table Data Name : ${getUnitTable}</p>
                            <a href="/admin/delete/${getUnitTable}/${getUnitName}/${getUnitPumpLable}/${getUnitCustomerLable}" class="btn btn-danger">DELETE</a>
                        </div>
                    </div>
                </td>
                `;
                k++;
            }
        }

        returnObj += `  
        </tr>
        `;
    }

    returnObj += `</table>`

    console.log(returnObj);

    Ref.current.innerHTML = returnObj;

    }, [dataLength]);

    return <>
        <div class="container-fluid">
            <div class="row flex-nowrap">
                <AdminComponent active={2}/>
                <div id="cols" ref={Ref} className="col py-3">
                </div>
            </div>
        </div>
    </>
}

export default DeletePage