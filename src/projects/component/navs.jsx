import React from "react";
import { Link } from "react-router-dom";
import "../css/navs.css";

function Navs() {
  return (
    <>
    <nav>
       <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-12 col-xl-12 col-md-12">
            <ul className="nav menus nav-pills ">
              <li className="nav-item">
                <Link to="/">
                  <div data-bs-toggle="pill" className="nav-link active">
                    Barchasi
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/burger">
                <div data-bs-toggle="pill" className="nav-link " >
                  Burger
                </div>
                </Link>
                
              </li>
              <li className="nav-item">
                <Link to="/konbo">
                 <div data-bs-toggle="pill" className="nav-link" >
                  Kombo
                </div>
                </Link>
               
              </li>
              <li className="nav-item">
                <Link to="/non-kabob">
                <div data-bs-toggle="pill" className="nav-link" >
                  Non Kabob
                </div>
                </Link>
                
              </li>
              <li className="nav-item">
                <Link to="/lavash">
                 <div data-bs-toggle="pill" className="nav-link" >
                  Lavash
                </div>
                </Link>
               
              </li>
              <li className="nav-item">
                <Link to="/sushi">
                 <div data-bs-toggle="pill" className="nav-link" >
                  Sushi
                </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
     
    </>
  );
}

export default Navs;
