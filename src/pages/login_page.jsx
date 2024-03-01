import LoginComponent from "../components/login_component"

function LoginPage(){
    return (
        <>
            <div className="container-fluid" style={{width: "100%"}}>
                <div className="col-sm" style={{margin: 2}}>
                    <LoginComponent />
                </div>
            </div>
        </>
    )
}

export default LoginPage