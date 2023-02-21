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
                <Link to="/pista">
                 <div data-bs-toggle="pill" className="nav-link" >
                  pitsa
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
