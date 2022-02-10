import React from "react";
import Links from "./Links";
import Delete from "./Delete";
import Add from "./Add";
import Tables from "./Tables";
import Update from "./Update";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    
      <>
     <Links />
      <div className="App">
     <div className="d-flex" id="wrapper">
       <div className="bg-white" id="sidebar-wrapper">
            <div  className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                    ></i>TASK</div>
            <div className="list-group list-group-flush my-3">
                <a  className="list-group-item list-group-item-action bg-transparent second-text active"><i
                        className="fas fa-tachometer-alt me-2"></i>Dashboard</a>
                <a href="Add.js" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-plus me-2"></i>ADD</a>
                <a href="Update.js" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-pen me-2"></i>UPDATE</a>
                <a href="Delete.js" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-minus me-2"></i>DELETE</a>
                
                <a href="#" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                        className="fas fa-power-off me-2"></i>Logout</a>
            </div>
        </div>
        
        <div id="page-content-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                <div className="d-flex align-items-center">
                    <i href="#" id="menu-toggle"></i>
                    <h2 className="fs-2 m-0">Dashboard</h2>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link  second-text fw-bold" href="#" id="navbarDropdown"
                                role="button" >
                                <i className="fas fa-user me-2"></i>UMANG PANCHAL
                            </a>
                            
                        </li>
                    </ul>
                </div>
            </nav>
<hr />
       <Tables />   
       
        
              
        </div>
    </div>
    </div>
  
    
 

  </>
 );
  }

export default App;
