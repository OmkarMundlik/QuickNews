import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

    const [isActive, setIsActive] = useState("Home")

    useEffect(() => {
        document.title = "NewsMonkey - " + isActive;
    }, [isActive]);


    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" >NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link onClick={() => {
                                    setIsActive("Home")
                                }} className={isActive === "Home" ? "nav-link active" : "nav-link"} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link onClick={() => {
                                setIsActive("Business");
                            }} className={isActive === "Business" ? "nav-link active" : "nav-link"} to="/Business">Business</Link></li>
                            <li className="nav-item"><Link onClick={() => {
                                setIsActive("Entertainment");

                            }} className={isActive === "Entertainment" ? "nav-link active" : "nav-link"} to="/Entertainment">Entertainment</Link></li>

                            <li className="nav-item"><Link onClick={() => {
                                setIsActive("General");
                            }} className={isActive === "General" ? "nav-link active" : "nav-link"} to="/General">General</Link></li>
                            <li className="nav-item"><Link onClick={() => {
                                setIsActive("Health");
                            }} className={isActive === "Health" ? "nav-link active" : "nav-link"} to="/Health">Health</Link></li>
                            <li className="nav-item"><Link onClick={() => {
                                setIsActive("Science");
                            }} className={isActive === "Science" ? "nav-link active" : "nav-link"} to="/Science">Science</Link></li>
                            <li className="nav-item"><Link onClick={() => {
                                setIsActive("Sports");
                            }} className={isActive === "Sports" ? "nav-link active" : "nav-link"} to="/Sports">Sports</Link></li>
                            <li className="nav-item"><Link onClick={() => {
                                setIsActive("Technology");
                            }} className={isActive === "Technology" ? "nav-link active" : "nav-link"} to="/Technology">Technology</Link></li>

                        </ul>

                        <div className="searchbar ms-5 me-5">
                            <span className="badge rounded-pill bg-danger">Search News</span>
                            <form className="d-flex flex " >
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(event) => {

                                }} />
                                <Link className="btn btn-outline-secondary my-2 my-sm-0" to="/query" >Search</Link>
                            </form>
                        </div>
                    </div>

                </div>


            </nav>

        </div>
    )
}

export default NavBar
