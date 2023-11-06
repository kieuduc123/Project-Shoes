const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice ({
    name :  "auth",
    initialState : {
        user : undefined,
        accessToken : null,
    },
    reducers : {
        authRegister: (state,action) => ({
            ...state,
            ...action.payload
        }),
        authLogin: (state,action) => ({ 
            ...state,
             ...action.payload
            }),
        //cap nhap thong tin user
        authUpdateUser : (state,action) => ({
            ...state,
            user : action.payload.user,
            accessToken : action.payload.accessToken,
        }),   

    },
});
export const {
    authRegister,
    authLogin,
    authUpdateUser,
} = authSlice.actions;
export default authSlice.reducer;
