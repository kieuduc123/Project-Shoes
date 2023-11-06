import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Label } from "../label";
import { Input } from "../input";
import FormGroup from "compotes/layout/FormGroup";
import Button from "compotes/button/Button";
import { toast } from "react-toastify";
import { IconEyeToggle } from "compotes/icons";
import useToggleValue from "hook/useToggleValue";
import { useState } from "react";

import { callRegisterUser } from "../../sever/service";
// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// const schema = yup
// .object({
// name: yup.string().required("This field is required"),
// email: yup.string().required('Email is required').email('Email is not valid'),
// phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone is required'),
// password: yup.string().min(4).max(16).required('Password is required'),
// confirmPassword: yup
//   .string()
//   .oneOf([yup.ref('password'), null], 'Confirm Password must match')
// .required('Confirm Password is required'),
// })
// .required();
//
 // const {
  // handleSubmit,
  // control,formState: {
  // isValid,
  // isSubmitting,
  // errors
  // }
  // } = useForm({
  // resolver: yupResolver(schema)
  // });
  // console.log(errors);
const Register = () => {
  const { value: showPassword, handleTogglePassword } = useToggleValue();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const handleSignUp = async (e) => {
    e.preventDefault();
    const newsUser = {
      fullName,
      email,
      password,
      confirmPassword,
    };
    // console.log("check", newsUser);
    const res = await callRegisterUser(newsUser);
    console.log("check res register", res);
    if (res?.data) {
      toast.success(res.data);

      navigate("/otp");
    } else {
      toast.error(`${res}`);
    }
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
          <h1 className="text-center mb-5 fs-2 fw-bold">Open Account</h1>
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
          <form onSubmit={handleSignUp}>
            <FormGroup>
              <Label htmlFor="name">Full name</Label>
              <Input
                // control={control}
                onChange={(e) => setFullName(e.target.value)}
                name="name"
                placeholder="Enter your full name"></Input>
              {/* <p className='text-danger mt-3 '>{errors.name?.message}</p> */}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="name@email.com"></Input>
              {/* <p className='text-danger mt-3'>{errors.email?.message}</p> */}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
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
            <FormGroup>
              <Label htmlFor="confirmPassword">ConfirmPassword</Label>
              <Input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={`${showPassword ? "text" : "password"}`}
                name="confirmPassword"
                placeholder="confirmPassword">
                <IconEyeToggle
                  open={showPassword}
                  onClick={handleTogglePassword}></IconEyeToggle>
              </Input>
            </FormGroup>

            <Button type="submit">Sign Up</Button>
            {/* <button type="submit"className="btn btn-dark d-block w-100 my-4">Sign Up</button> */}
          </form>
          <p className="d-block text-center text-muted">
            Already registered?{" "}
            <NavLink className="text-muted" to="/login">
              Login here.
            </NavLink>
          </p>
        </div>
      </div>
      {/* <!-- / Login Form--> */}

      {/* <!-- /Page Content --> */}
    </section>
  );
};

export default Register;
