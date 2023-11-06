import Api from "sever/Api";
import url from "sever/url";
import {loginStart,loginSuccess ,loginFailed, registerStart, registerFailed, registerSuccess} from "./authSlice"

export const loginUser = async (user,dispatch,navigate) => {
    dispatch(loginStart());
    try {
        // const res = await axios.post("https://semester3shoprunner.azurewebsites.net/api/Users/login", user)
        const res = await Api.post(url.USER.LOGIN,user);
        dispatch(loginSuccess(res.data));
        navigate("/");
    }
    catch(error) {
        dispatch(loginFailed());
    }
};
export const registerUser = async (user,dispatch,navigate) => {
    dispatch(registerStart());
    try {
        await Api.post(url.USER.REGISTER, user);
        dispatch(registerSuccess());
        navigate("/login");
    }
    catch (error) {
        dispatch (registerFailed());
    }

};
// export const logOut = async (dispatch,navigate,accessToken,axiosJWT) => {
    // dispatch(loginStart());
    // try {
        // await axiosJWT.post(url.USER.LogOut,{
            // headers : {token:`Bearer ${accessToken}`} 
        // })
        // dispatch(loginSuccess());
        //  } catch (error) {
        // dispatch (loginFailed());
    // }
// 
// };
// 