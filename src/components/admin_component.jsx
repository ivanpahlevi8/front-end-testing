function AdminComponent({active}){
    return <>
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <img className="mb-4" src="https://companieslogo.com/img/orig/KSB.NS-520c52e8.png?t=1604232065" width={"72"}/>
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Dashboard</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start mt-5" id="menu">
                    <li class="nav-item" style={{width: "25vh"}}>
                        <a href="/admin" class={active===0?"nav-link active":"nav-link text-black"} aria-current="page">
                        <svg class="bi me-2" width="20" height="16"><use xlink:href=""/></svg>
                        Home
                        </a>
                    </li>
                    <li class="nav-item" style={{width: "25vh"}}>
                        <a href="/admin/add" class={active===1?"nav-link active":"nav-link text-black"} aria-current="page">
                        <svg class="bi me-2" width="20" height="16"><use xlink:href=""/></svg>
                        Add Unit
                        </a>
                    </li>
                    <li class="nav-item" style={{width: "25vh"}}>
                        <a href="/admin/delete" class={active===2?"nav-link active":"nav-link text-black"} aria-current="page">
                        <svg class="bi me-2" width="20" height="16"><use xlink:href=""/></svg>
                        Delete Unit
                        </a>
                    </li>
                    <li class="nav-item" style={{width: "25vh"}}>
                        <a href="/admin/update" class={active===3?"nav-link active":"nav-link text-black"} aria-current="page">
                        <svg class="bi me-2" width="20" height="16"><use xlink:href=""/></svg>
                        Update Unit
                        </a>
                    </li>
                </ul>
                <hr/>
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="d-none d-sm-inline mx-1">Admin</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="/">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default AdminComponent