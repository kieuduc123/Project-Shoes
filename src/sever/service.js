import { useParams } from "react-router-dom";
import axios from "./Api";
export const callLoginUser = async (user) => {
  const res = await axios.post(
    "https://semester3shoprunner.azurewebsites.net/api/Users/login",
    { ...user }
  );
  return res;
};
export const logOut = async () => {
const res = await axios.post (
"https://semester3shoprunner.azurewebsites.net/api/Users/log_out",{}
);
return res;
}
export const callRegisterUser = async (user) => {
  const res = await axios.post(
    "https://semester3shoprunner.azurewebsites.net/api/Users/register",
    { ...user }
  );
  return res;
};
export const callUserOTP = async (param) => {
  const res = await axios.post(
    `https://semester3shoprunner.azurewebsites.net/api/Users/verifyOtp?${param}`
  );
  return res;
};

export const sendUserOtp = async (sendOtp) => {
  const res = await axios.post(`https://semester3shoprunner.azurewebsites.net/api/Users/send_again_otp?email=${sendOtp}`
  );
  return res;
};
