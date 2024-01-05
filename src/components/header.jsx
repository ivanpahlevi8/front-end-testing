
function Header() {
    return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ml-5 mt-5">
        <a className="navbar-brand" href="#">Main Bar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">Traffic People</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/feature1">Feature 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/feature2">Feature 2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/feature3">Feature 3</a>
                </li>

            </ul>
        </div>
    </nav>
    </>)
}

export default Header