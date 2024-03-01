import RegisterComponent from "../components/register_component"

function RegisterPage(){
    return (
        <>
            <div className="container-fluid" style={{width: "100%"}}>
                <div className="col-sm" style={{margin: 2}}>
                    <RegisterComponent />
                </div>
            </div>
        </>
    )
}

export default RegisterPage