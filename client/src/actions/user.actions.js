import axios from "axios";

export const GET_USER = "GET_USER";
export const getUser = (uid)=> {
    return(dispatch)=> {
        const ch="http://localhost:3002/userLog/"+uid
        return axios
            .get(ch)
            .then((res)=> {
                dispatch({ type: GET_USER, payload: res.data})
            })
            .catch((err)=>{
                console.log(err)
               
            } );
    };
};