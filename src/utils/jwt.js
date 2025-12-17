import { jwtDecode } from "jwt-decode"
export const decodeToken =(token)=>{
    try{
        return jwtDecode (token);
    }catch(err){
        console.error(err+"Invalid token");
        return null;
    }
};
    