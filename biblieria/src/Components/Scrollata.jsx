import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAuthContext from "../context/AuthContext"; 

export default function Scrollata() {
    const { pathname } = useLocation();
    const { getUser } = useAuthContext();

    useEffect(() => {
        getUser()
        setTimeout(() => {
               window.scrollTo(0, 0);
        }, 1);
        console.log('esegue useeffect')
    }, [pathname]);

   
  
    return null;
}
