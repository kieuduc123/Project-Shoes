import React, { useState } from "react";
import LogoPage from "./LogoPage";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { logOut } from "sever/service";
import { toast } from "react-toastify";

const NavBar = () => {
    const {id} = useParams();
  const navigate = useNavigate()
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const email = localStorage.getItem("dataUser") || "";

    const handleLogout = () => {

        localStorage.removeItem("currentUser");
        localStorage.removeItem("dataUser");
        toast.success("Success")
        navigate("/");
    }

        
        
        
    return (
        <nav className="navbar  navbar-expand-lg navbar-light bg-white flex-column border-0  ">
            <div className="container-fluid">
                <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        {/* <!-- Logo--> */}
                        <LogoPage></LogoPage>
                        {/* <!-- / Logo--> */}
                        {/* <!-- Navbar Icons--> */}
                        <ul className="list-unstyled mb-0 d-flex align-items-center order-1 order-lg-2 nav-sidelinks">
                            {/* <!-- Mobile Nav Toggler--> */}
                            <li className="d-lg-none">
                                <span
                                    className="nav-link text-body d-flex align-items-center cursor-pointer"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <i className="ri-menu-line ri-lg me-1"></i>{" "}
                                    Menu
                                </span>
                            </li>
                            {/* <!-- /Mobile Nav Toggler-->
                        <!-- Navbar Search--> */}
                            <li className=" d-sm-block">
                                <input
                                    className="border-0 p-2 text-black"
                                    type="text"
                                    placeholder="Search"
                                />
                            </li>
                            {/* <!-- /Navbar Search-->
                        <!-- Navbar Login--> */}
                            <li className="ms-1 d-none d-lg-inline-block ">
                                {email ? (
                                    <div className="login">
                                        <NavLink
                                            className="nav-link  user
                             text-body"
                                        >
                                            Hi {email.substring(0, 5)}

                                            <div className="logout">
                                            <button className="btn-wrap"  onClick={handleLogout} >Log Out</button>
                                        </div>
                                        </NavLink>
                                    </div>
                                ) : (
                                    <NavLink
                                        className="nav-link 
                              text-body"
                                        to="/login"
                                    >
                                        Account
                                    </NavLink>
                                )}
                            </li>
                            <li className="ms-1 d-inline-block position-relative dropdown-cart">
                                <NavLink
                                    to="/cart"
                                    className="nav-link me-0 disable-child-pointer border-0 p-0 bg-transparent text-body"
                                >
                                    Cart
                                    <span className="items">{cart.length}</span>
                                </NavLink>
                            </li>
                        </ul>
                        {/* <!-- Main Navigation--> */}
                        <div
                            className="flex-shrink-0 collapse navbar-collapse navbar-collapse-light w-auto flex-grow-1 order-2 order-lg-1"
                            id="navbarNavDropdown"
                        >
                            {/* <!-- Menu--> */}
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/"
                                        role="button"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/products"
                                        role="button"
                                    >
                                        Product
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/"
                                        role="button"
                                    >
                                        About Us
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/"
                                        role="button"
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                            {/* <!-- / Menu--> */}
                        </div>
                        {/* <!-- / Main Navigation--> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
