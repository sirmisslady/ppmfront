import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">PPM</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="navbar-brand" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/">Patients</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/PatientForm">Add Patient</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/PhoneForm">Add Phone</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/PatientsPhoneForm">Assign Phone</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
};

export default Navbar;