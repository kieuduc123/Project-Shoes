import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "../label";
import { Input } from "../input";
import FormGroup from "compotes/layout/FormGroup";
import Button from "compotes/button/Button";
import { toast } from "react-toastify";
import { callUserOTP, sendUserOtp } from "../../sever/service";

const PageOTP = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  //gửi otp
  const handleLogin = async (e) => {
    e.preventDefault();
    const query = `otp=${otp}&email=${email}`;
    const res = await callUserOTP(query);
    console.log("check res otp", res);
    if (res?.data) {
      toast.success("Thành công");
       navigate("/");
    } else {
      toast.error(res);
    }
  };

// gửi lại otp 
  const handleSendOtp = async (e) => {
    e.preventDefault();
    const res = await sendUserOtp(email);
    console.log("check send ==> " ,res)
    if(res?.data) {
      toast.success("Xin Moi Check Email");
  } else {
    toast.error(res);
  }
  };
  console.log("email", email);
  return (
    <section className="mt-0 overflow-hidden  vh-100 d-flex justify-content-center align-items-center p-4">
      {/* <!-- Page Content Goes Here --> */}

      {/* <!-- Login Form--> */}
      <div className="col col-md-8 col-lg-6 col-xxl-5">
        <span className="text-muted text-center d-block fw-bolder my-4">
          OTP
        </span>
        <form onSubmit={handleLogin}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              // control={control}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              placeholder="name@email.com"></Input>
            {/* <p className='text-danger mt-3'>{errors.email?.message}</p> */}
          </FormGroup>
          <FormGroup>
            <Label
              className=" d-flex justify-content-between align-items-center"
              htmlFor="password">
              Enter OTP         
            </Label>
            <Input
              // control={control}
              onChange={(e) => setOtp(e.target.value)}
              name="otp"
              placeholder="Enter your  otp"></Input>
            {/* <p className='text-danger mt-3'>{errors.password?.message}</p> */}
          </FormGroup>

          <Button type="submit">Submit OTP</Button>
        </form>
        <p className="d-block text-center text-muted">
        You have not received the otp code ?{" "}
          {/* <button className="text-muted" onClick={() => sendUserOtp(email)}>
          SEND TO 
          </button> */}
          <button className="text-muted" onClick={handleSendOtp}>
          SEND TO 
          </button>
        </p>

      </div>
      {/* </div> */}
      {/* <!-- / Login Form--> */}

      {/* <!-- /Page Content --> */}
    </section>
  );
};

export default PageOTP;
