import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const authSlice = createSlice({
    name: "auth",
    initialState:{
        login : {
            currentUser : null,
            isFetching : false,
            error : false
        },
        register: {
            isFetching : false,
            error : false,
            success : false
        },
        logout : {
            isFetching : false,
            error : false,
        }
    },
    reducers:{
        loginStart : (state) => {
            state.login.isFetching = true;
        },
        loginSuccess :(state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error =false;
            toast.success("thanh cong");
        },
        loginFailed : (state) => {
            state.login.isFetching = false;
            state.login.error = true;
            toast.success("chua xac nhan ");
        },


        registerStart : (state) => {
            state.register.isFetching = true;
        },
        registerSuccess :(state) => {
            state.register.isFetching = false;
            state.register.error =false;
            state.register.success = true;
            toast.success("thanh cong");
        },
        registerFailed : (state) => {
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = false;
            toast.success("chua xac nhan ");
        },
        
      
      
      
        // logoutSuccess :(state, action) => {
            // state.logout.isFetching = false;
            // state.login.currentUser = null;
            // state.logout.error =false;
            // toast.success("thanh cong");
        // },
        // logoutFailed : (state) => {
            // state.logout.isFetching = false;
            // state.logout.error = true;
            // toast.success("chua xac nhan ");
        // },
    //    logoutStart : (state) => {
            // state.logout.isFetching = true;
        // },

    }
});
export const {
    loginStart,
    loginSuccess,
    loginFailed,
    
    registerStart,
    registerSuccess,
    registerFailed,

    // logoutStart,
    // logoutSuccess,
    // logoutFailed,
} = authSlice.actions;
export default authSlice.reducer;