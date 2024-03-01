import { json, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import UserSession from "./user_session";

function RegisterComponent(){
    UserSession.setIsAuthenticate(false);
    UserSession.setLevel(0);

    console.log(UserSession.getIsAuthenticated());

    const navigate = useNavigate();

    // create login password
    async function processLogin(fullName, username, password){
        // create request object
        var reqObj = {
            "full_name":fullName,
            "username": username,
            "password": password,
            "access_level" : 2
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
        var response = await fetch('http://ksb-iot.intranet:3030/register', reqPayload).then(resp => resp.json());

        // get response member
        var statusResp = response.status;
        var messageResp = response.message;

        console.log(response);

        // check status
        if(statusResp === false) {
            Swal.fire(
                {
                    title: "Failed To Register!!!",
                    text: messageResp,
                    icon: 'error',
                    confirmButtonText: 'OK'
                }
            )
            return 
        }

        // if status okay
        Swal.fire({
            title: "Success Registering!!!",
            text: messageResp,
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result)=>{
            if(result.isConfirmed){
                // ok button clicked
                // navigate to main
                navigate('/');
                console.log("navigate to main page...");
            }
        })
    }

    return <>
        <form>
            <img className="mb-4" src="https://companieslogo.com/img/orig/KSB.NS-520c52e8.png?t=1604232065" width={"72"}/>
            <h3 className="h3 mb-3 fw-normal load">Sign Up Page</h3>
            <div className="form-floating mt-5">
                <input type="text" className="form-control" id="full_name" placeholder="full name"/>
                <label htmlFor="floatingInput">Full Name</label>
            </div>
            <div className="form-floating mt-3">
                <input type="text" className="form-control" id="username" placeholder="username"/>
                <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating mt-3">
                <input type="password" className="form-control" id="password" placeholder="password"/>
                <label htmlFor="floatingInput">Password</label>
            </div>
        </form>
        <button className="w-100 btn btn-lg btn-primary mt-5" onClick={()=>{
                var getFullName = document.getElementById("full_name").value;
                var getUsername = document.getElementById("username").value;
                var getPassword = document.getElementById("password").value;

                // call login function
                processLogin(getFullName, getUsername, getPassword);
            }}>Sign Up</button>
    </>
}

export default RegisterComponent