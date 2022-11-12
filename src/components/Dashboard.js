import React from "react";
import { Link } from "react-router-dom";
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import AddProduct from "./AddProduct";

const Dashboard = ()=>{
    return(
        <> <input type="checkbox" id="nav-toggle"></input>
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h2><span className="lab la-accusoft "></span> <span>Accusoft</span></h2>
                </div>
                <div className="sidebar-menu">
                     <ul>
                        <li>
                            <Link to="#" className="active"><span className="las la-igloo"></span>
                            <span className="fa-solid fa-bars"></span>

                            <span>Dashboard</span></Link>
                        </li>
                        <li>
                            <Link to="#"><span className="las la-users"></span>
                            <span>Customers</span></Link>
                        </li>
                        <li>
                            <Link to="/AddProduct"><span className="las la-clipboard-list"></span>
                            <span>Products</span></Link>
                        </li>
                        <li>
                            <Link to="#"><span className="las la-shipping-bag"></span>
                            <span>Orders</span></Link>
                        </li>
                        <li>
                            <Link to="#"><span className="las la-receipt"></span>
                            <span>Inventory</span></Link>
                        </li>
                        <li>
                            <Link to="#"><span className="las la-receipt"></span>
                            <span>Accounts</span></Link>
                        </li>
                        <li>
                            <Link to="#"><span className="las la-clipboard-list"></span>
                            <span>Tasks</span></Link>
                        </li>
                        </ul>

                    </div>
            </div>
            {/*------------ Header Area--------------- */}
            <div className="main-content">

                <header>
                    <div className="header-title header-style">
                        <h2>
                            <label for="nav-toggle">
                                <span className="las la-bar"></span>
                            </label>
                            Dashboard
                        </h2>
                        <div className="search-wrapper">
                            <span className="las la-search"></span>
                            <input type="search" placeholder="Search Here"/>
                            </div>
                        <div className="user-wrapper">
                                <img src="https://static-cse.canva.com/blob/951362/1600w-EW4cggXkgbc.jpg" width="40px" height="30px" alt="" />
                                <div>
                                    <h4>Jhon Doe</h4>
                                    <small>Super Admin</small>
                                </div>
                            </div>
                    </div>
                </header>
                {/* Main Area here */}
                {/* <AddProduct /> */}
            </div>
        </>
    );
}
export default Dashboard;