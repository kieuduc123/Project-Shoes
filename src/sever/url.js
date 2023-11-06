
const url = {
    BASE_URL :  "https://semester3shoprunner.azurewebsites.net/api",
    CATEGORY:{
        LIST: '/category',
        CRETE: '/category',
        DETAIL: "/category/get-by-id"
    },
    PRODUCT:{
        LIST: '/product',
        DETAIL: '/product/get-by-id',
        RELATED: "/product/related",
        SORT_LIST: "/product/sorting?sortBy=",
    },
    USER: {
        REGISTER : "/Users/register",
        LOGIN : "/Users/Login",
    },


}
export default url;