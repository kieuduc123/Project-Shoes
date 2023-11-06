import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import NavBarCart from '../Nagition/NavBarCart';
const Checkout = () => {
    return (
        <Fragment>
            <section className="mt-0  vh-lg-100">
        {/* <!-- Page Content Goes Here --> */}
        <div className="container">
            <div className="row g-0 vh-lg-100">
                <div className="col-lg-7 pt-5 pt-lg-10">
                    <div className="pe-lg-5">
                        {/* <!-- Logo--> */}
                        <NavLink  className="navbar-brand fw-bold fs-3 flex-shrink-0 mx-0 px-0" to="./index.html">
                                <div className="d-flex align-items-center">
                                    <svg className="f-w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.53 72.26"><path d="M10.43,54.2h0L0,36.13,10.43,18.06,20.86,0H41.72L10.43,54.2Zm67.1-7.83L73,54.2,68.49,62,45,48.47,31.29,72.26H20.86l-5.22-9L52.15,0H62.58l5.21,9L54.06,32.82,77.53,46.37Z" fill="currentColor" fill-rule="evenodd"/></svg>
                                </div>
                            </NavLink >
                        {/* <!-- / Logo--> */}
                      <NavBarCart></NavBarCart>
                                <div className="mt-5">
                            {/* <!-- Checkout Panel Information--> */}
                            <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-4">
                              <h3 className="fs-5 fw-bolder m-0 lh-1">Contact Information</h3>
                              <small className="text-muted fw-bolder">Already registered? <NavLink to="./login.html">Login</NavLink ></small>
                            </div>
                            <div className="row">
                              {/* <!-- First Name--> */}
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label for="firstNameBilling" className="form-label">First name</label>
                                  <input type="text" className="form-control" id="firstNameBilling" placeholder="" value="" required=""/>
                                </div>
                              </div>
                            
                              {/* <!-- Last Name--> */}
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label for="lastNameBilling" className="form-label">Last name</label>
                                  <input type="text" className="form-control" id="lastNameBilling" placeholder="" value="" required=""/>
                                </div>
                              </div>
                            
                              {/* <!-- Email--> */}
                              <div className="col-12">
                                <div className="form-group">
                                  <label for="email" className="form-label">Email</label>
                                  <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                                </div>
                            
                                {/* <!-- Mailing List Signup--> */}
                                <div className="form-group form-check m-0">
                                  <input type="checkbox" className="form-check-input" id="add-mailinglist" checked/>
                                  <label className="form-check-label small text-muted" for="add-mailinglist">Keep me updated with your latest news and offers</label>
                                </div>
                              </div>
                            </div>
                            
                            <h3 className="fs-5 mt-5 fw-bolder mb-4 border-bottom pb-4">Shipping Address</h3>
                            <div className="row">
                              {/* <!-- First Name--> */}
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label for="firstName" className="form-label">First name</label>
                                  <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
                                </div>
                              </div>
                            
                              {/* <!-- Last Name--> */}
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label for="lastName" className="form-label">Last name</label>
                                  <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
                                </div>
                              </div>
                            
                              {/* <!-- Address--> */}
                              <div className="col-12">
                                <div className="form-group">
                                  <label for="address" className="form-label">Address</label>
                                  <input type="text" className="form-control" id="address" placeholder="123 Some Street Somewhere" required=""/>
                                </div>
                              </div>
                            
                              {/* <!-- Country--> */}
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label for="country" className="form-label">Country</label>
                                  <select className="form-select" id="country" required="">
                                    <option value="">Please Select...</option>
                                    <option>United States</option>
                                  </select>
                                </div>
                              </div>
                            
                              {/* <!-- State--> */}
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="state" className="form-label">State</label>
                                  <select className="form-select" id="state" required="">
                                    <option value="">Please Select...</option>
                                    <option>California</option>
                                  </select>
                                </div>
                              </div>
                            
                              {/* <!-- Post Code--> */}
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="zip" className="form-label">Zip/Post Code</label>
                                  <input type="text" className="form-control" id="zip" placeholder="" required=""/>
                                </div>
                              </div>
                            </div>
                            
                            <div className="pt-4 mt-4 pb-5 border-top d-flex justify-content-between align-items-center">
                              {/* <!-- Shipping Same Checkbox--> */}
                              <div className="form-group form-check m-0">
                                <input type="checkbox" className="form-check-input" id="same-address" checked/>
                                <label className="form-check-label" for="same-address">Use for billing address</label>
                              </div>
                            </div>
                            
                            {/* <!-- Billing Address--> */}
                            <div className="billing-address d-none">
                              <h3 className="fs-5 fw-bolder mb-4 border-bottom pb-4">Billing Address</h3>
                              <div className="row">
                                {/* <!-- First Name--> */}
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label for="firstNameAddress" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstNameAddress" placeholder="" value="" required=""/>
                                  </div>
                                </div>
                            
                                {/* <!-- Last Name--> */}
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label for="lastNameAddress" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastNameAddress" placeholder="" value="" required=""/>
                                  </div>
                                </div>
                            
                                {/* <!-- Address--> */}
                                <div className="col-12">
                                  <div className="form-group">
                                    <label for="addressAddress" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="addressAddress" placeholder="123 Some Street Somewhere" required=""/>
                                  </div>
                                </div>
                            
                                {/* <!-- Country--> */}
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label for="countryAddress" className="form-label">Country</label>
                                    <select className="form-select" id="countryAddress" required="">
                                      <option value="">Please Select...</option>
                                      <option>United States</option>
                                    </select>
                                  </div>
                                </div>
                            
                                {/* <!-- State--> */}
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label for="stateAddress" className="form-label">State</label>
                                    <select className="form-select" id="stateAddress" required="">
                                      <option value="">Please Select...</option>
                                      <option>California</option>
                                    </select>
                                  </div>
                                </div>
                            
                                {/* <!-- Post Code--> */}
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label for="zipAddress" className="form-label">Zip/Post Code</label>
                                    <input type="text" className="form-control" id="zipAddress" placeholder="" required=""/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!-- / Billing Address--> */}
                            
                            <div className="pt-5 mt-5 pb-5 border-top d-flex justify-content-md-end align-items-center">
                              <NavLink to="/checkout-shipping" className="btn btn-dark w-100 w-md-auto" role="button">Proceed to shipping</NavLink>
                            </div>                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-5 bg-light pt-lg-10 aside-checkout pb-5 pb-lg-0 my-5 my-lg-0">
                    <div className="p-4 py-lg-0 pe-lg-0 ps-lg-5">
                        <div className="pb-3">
                            {/* <!-- Cart Item--> */}
                            <div className="row mx-0 py-4 g-0 border-bottom">
                                <div className="col-2 position-relative">
                                        <span className="checkout-item-qty">3</span>
                                    <picture className="d-block border">
                                        <img className="img-fluid" src="./assets/images/products/product-cart-1.jpg" alt="HTML Bootstrap Template by Pixel Rocket"/>
                                    </picture>
                                </div>
                                <div className="col-9 offset-1">
                                    <div>
                                        <h6 className="justify-content-between d-flex align-items-start mb-2">
                                            Nike Air VaporMax 2021
                                            <i className="ri-close-line ms-3"></i>
                                        </h6>
                                        <span className="d-block text-muted fw-bolder text-uppercase fs-9">Size: 9 / Qty: 1</span>
                                    </div>
                                    <p className="fw-bolder text-end text-muted m-0">$85.00</p>
                                </div>
                                    </div>
                                    {/* <!-- / Cart Item--> */}
                            {/* <!-- Cart Item--> */}
                            <div className="row mx-0 py-4 g-0 border-bottom">
                                <div className="col-2 position-relative">
                                        <span className="checkout-item-qty">3</span>
                                    <picture className="d-block border">
                                        <img className="img-fluid" src="./assets/images/products/product-cart-2.jpg" alt="HTML Bootstrap Template by Pixel Rocket"/>
                                    </picture>
                                </div>
                                <div className="col-9 offset-1">
                                    <div>
                                        <h6 className="justify-content-between d-flex align-items-start mb-2">
                                            Nike ZoomX Vaporfly
                                            <i className="ri-close-line ms-3"></i>
                                        </h6>
                                        <span className="d-block text-muted fw-bolder text-uppercase fs-9">Size: 11 / Qty: 1</span>
                                    </div>
                                    <p className="fw-bolder text-end text-muted m-0">$125.00</p>
                                </div>
                                    </div>
                                    {/* <!-- / Cart Item--> */}
                        </div>
                        <div className="py-4 border-bottom">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <p className="m-0 fw-bolder fs-6">Subtotal</p>
                                <p className="m-0 fs-6 fw-bolder">$422.99</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center ">
                                <p className="m-0 fw-bolder fs-6">Shipping</p>
                                <p className="m-0 fs-6 fw-bolder">$8.95</p>
                            </div>
                        </div>
                        <div className="py-4 border-bottom">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="m-0 fw-bold fs-5">Grand Total</p>
                                    <span className="text-muted small">Inc $45.89 sales tax</span>
                                </div>
                                <p className="m-0 fs-5 fw-bold">$422.99</p>
                            </div>
                        </div>
                        <div className="py-4">
                            <div className="input-group mb-0">
                                <input type="text" className="form-control" placeholder="Enter your coupon code"/>
                                <button className="btn btn-dark btn-sm px-4">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- /Page Content --> */}
    </section>
    {/* <!-- / Main Section--> */}


        </Fragment>
    );
};

export default Checkout;