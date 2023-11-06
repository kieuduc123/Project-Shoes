import React, { Fragment, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// import NavBarCart from '../Nagition/NavBarCart';

const Cart = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + (item.price * item.quantity)
    }, 0)
    setTotal(total);
  }, [cart]);
 
  const handleDec = (id) => {
    const updateCart = cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1 
        }
      }
      return item;
    
    })
    localStorage.setItem("cart", JSON.stringify(updateCart))
       navigate("/cart") 
  };
  const handleInc = (id) => {
    const updateCart = cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item;
    
    })
    localStorage.setItem("cart", JSON.stringify(updateCart))
    navigate("/cart")
  };
   const handleRemove = (id) =>  {
    const updateCart = cart.filter(item => item.id !== id)
     localStorage.setItem("cart", JSON.stringify(updateCart))
       navigate("/cart") 
  }
  if (cart.length === 0) {
    return <div className='cart d-flex justify-content-center align-items-center'>Cart Is Empty</div>
  } 
    return (
      <Fragment>
        <div className="card">
          <div className="row">
            <div className="col-md-8 cart">
              <div className="title">
                <div className="row">
                  <div className="col">
                    <h4>
                      <b>Shopping Cart</b>
                    </h4>
                  </div>
                  <div className="col align-self-center text-right text-muted">
                   {cart?.length} Items
                  </div>
                </div>
              </div>
              {cart.map(cart => {
                return(
                <div className="row border-top border-bottom">
                <div className="row main align-items-center">
                  <div className="col-2">
                    <img
                      className="img-fluid"
                      src={cart.thumbnail} alt={cart.name}
                    />
                  </div>
                  <div className="col-3">
                        <div className="row text-muted">Nike</div>
                        <div className="row">{ cart.name}</div>
                  </div>
                                <div className="col-4" style={{width: "200px"}}>
                                    <NavLink>

      <svg onClick={() => handleDec(cart.id)}  style={{width: "27px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-2 h-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
    </svg>
                                    </NavLink>


                                    <input  style={{width: "50px"}} type="text" className="border text-center" value={cart.quantity} />
                                    <NavLink>

                    <svg onClick={() => handleInc(cart.id)}  style={{width: "27px"}}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                                    </NavLink>


                  
                  </div>
                  <div className="col-3">
                        ${cart.price * cart.quantity}
                        <span className="close ml-4 cursor-pointer"  onClick={() => handleRemove(cart.id)}>&#10005;</span>
                      </div>
                      
                </div>
              </div>
                )
              })
            }
              <div className="back-to-shop">
                <NavLink to="/products">
                  <span>Back to shop</span>
                </NavLink>
              </div>
            </div>
            <div className="col-md-4 summary">
              <div>
                <h5>
                  <b>Summary</b>
                </h5>
              </div>
              <hr />
              <div className="row">
                <div className="col pl-0">ITEMS { cart.length}</div>
                <div className="col text-right">${ total}</div>
              </div>
              <form>
                <p>SHIPPING</p>
                <select>
                  <option className="text-muted">
                    Standard-Delivery- $5.00
                  </option>
                </select>
                <p>GIVE CODE</p>
                <input id="code" placeholder="Enter your code" />
              </form>
              <div
                className="row"
                // style={{ border- top:" 1px solid rgba(0,0,0,.1)"; padding: " 2vh 0"}}
              >
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">$ {(total + 500)}</div>
              </div>
              <NavLink to="/checkout"  className=" btn btn-dark w-100 mt-4 mr- mb-0 hover-lift-sm hover-box-shadow">CHECKOUT</NavLink>
            </div>
          </div>
        </div>
        {/* <!-- / Main Section--> */}
      </Fragment>
    );
};

export default Cart;