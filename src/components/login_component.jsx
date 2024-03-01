import { json, useNavigate } from "react-router-dom";
import Swal                  from 'sweetalert2'
import UserSession           from "./user_session";

import UserSession           from "./user_session";


function LoginComponent(){
    UserSession.setIsAuthenticate(false);
    UserSession.setLevel(0);

    console.log(UserSession.getIsAuthenticated());

    const navigate = useNavigate();

    // create login password
    async function processLogin(username, password){
        // create request object
        var reqObj = {
            "username": username,
            "password": password
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
        var response = await fetch('http://ksb-iot.intranet:3030/login', reqPayload).then(resp => resp.json());

        // get response member
        var statusResp = response.status;
        var levelResp = response.level;
        var messageResp = response.message;

        console.log(response);

        // check status
        if(statusResp === false) {
            Swal.fire(
                {
                    title: "Failed Login!!!",
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
                navigate('ui/');
                console.log("navigate to main page...");
            }
        })
    }

    return <>
        <form>
            <img className="mb-4" src="https://companieslogo.com/img/orig/KSB.NS-520c52e8.png?t=1604232065" width={"72"}/>
            <h3 className="h3 mb-3 fw-normal load">Please Sign In</h3>

            <div className="form-floating mt-5">
                <input type="text" className="form-control" id="username" placeholder="username"/>
                <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating mt-3">
                <input type="password" className="form-control" id="password" placeholder="password"/>
                <label htmlFor="floatingInput">Password</label>
            </div>
        </form>
        <button className="w-100 btn btn-lg btn-primary mt-5" onClick={()=>{
                var getUsername = document.getElementById("username").value;
                console.log(getUsername);
                var getPassword = document.getElementById("password").value;
                console.log("logging in");

                // call login function
                processLogin(getUsername, getPassword);
            }}>Sign In</button>
        <p style={{color : "white", fontSize: "12px"}}>Dont have an account? <a href="/register" style={{color : "white", fontSize: "16px"}}>Sign Up</a></p>
    </>
}

export default LoginComponent