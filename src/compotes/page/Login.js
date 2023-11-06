import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { useForm} from "react-hook-form";
import { Label } from "../label";
import { Input } from "../input";
import FormGroup from "compotes/layout/FormGroup";
import Button from "compotes/button/Button";
import { toast } from "react-toastify";
import { IconEyeToggle } from "compotes/icons";
import useToggleValue from "hook/useToggleValue";
import { callLoginUser } from "../../sever/service";

const Login = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const { value: showPassword, handleTogglePassword } = useToggleValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    // const newUser  = {
    //   email : email ,
    //   password : password,
    // };
    // loginUser(newUser,dispatch,navigate);
    // console.log("Sign Up ", e);
    const testData = {
      email,
      password,
    };
    const res = await callLoginUser(testData);
    console.log("check res login ", res);
    if (res?.data?.user?.email) {
      toast.success("Thành Công");
      localStorage.setItem("currentUser", res?.data?.access_token);
      localStorage.setItem("dataUser", res?.data?.user?.email);
      navigate("/");
    } else {
      toast.error(`${res}`);
    }
    // console.log("check login res ---", res);
  };

  return (
    <section className="mt-0 overflow-hidden  vh-100 d-flex justify-content-center align-items-center p-4">
      {/* <!-- Page Content Goes Here --> */}

      {/* <!-- Login Form--> */}
      <div className="col col-md-8 col-lg-6 col-xxl-5">
        {/* <!-- Logo--> */}
        <NavLink
          className="navbar-brand fw-bold fs-3 flex-shrink-0 order-0 align-self-center justify-content-center d-flex mx-0 px-0"
          to="/">
          <div className="d-flex align-items-center">
            <svg
              className="f-w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 77.53 72.26">
              <path
                d="M10.43,54.2h0L0,36.13,10.43,18.06,20.86,0H41.72L10.43,54.2Zm67.1-7.83L73,54.2,68.49,62,45,48.47,31.29,72.26H20.86l-5.22-9L52.15,0H62.58l5.21,9L54.06,32.82,77.53,46.37Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </NavLink>
        {/* <!-- / Logo--> */}
        <div className="shadow-xl p-4 p-lg-5 bg-white">
          <h1 className="text-center fw-bold mb-5 fs-2">Login</h1>
          <NavLink to="#" className="btn btn-facebook d-block mb-2">
            <i className="ri-facebook-circle-fill align-bottom"></i> Login with
            Facebook
          </NavLink>
          <NavLink to="#" className="btn btn-twitter d-block mb-2">
            <i className="ri-twitter-fill align-bottom"></i> Login with Twitter
          </NavLink>
          <span className="text-muted text-center d-block fw-bolder my-4">
            OR
          </span>
          <form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                // control={control}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="name@email.com"></Input>
              {/* <p className='text-danger mt-3'>{(errors?.email)}</p> */}
            </FormGroup>
            <FormGroup>
              <Label
                className=" d-flex justify-content-between align-items-center"
                htmlFor="password">
                Password
                <NavLink to="/forgotten-password" className="text-muted small">
                  Forgot your password?
                </NavLink>
              </Label>
              <Input
                // control={control}
                onChange={(e) => setPassword(e.target.value)}
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                placeholder="Password">
                <IconEyeToggle
                  open={showPassword}
                  onClick={handleTogglePassword}></IconEyeToggle>
              </Input>
              {/* <p className='text-danger mt-3'>{errors.password?.message}</p> */}
            </FormGroup>

            <Button type="submit">Login</Button>
          </form>
          <p className="d-block text-center text-muted">
            New customer?{" "}
            <NavLink className="text-muted" to="/register">
              Sign up for an account
            </NavLink>
          </p>
        </div>
      </div>
      {/* <!-- / Login Form--> */}

      {/* <!-- /Page Content --> */}
    </section>
  );
};

export default Login;
