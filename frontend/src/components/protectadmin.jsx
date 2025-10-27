import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRouteadmin =  ({ children }) => {
  const [isAuth, setIsAuth] = useState(null); 

  useEffect( () => {
  const data =  axios
      .get("http://localhost:1000/api/admindashboard", { withCredentials: true })
      .then(() => setIsAuth(true) )
       .catch(() => setIsAuth(false));
      console.log(data)
  }, []);

  if (isAuth === null) return <div>Loading...</div>;

  return isAuth ? children : <Navigate to="/admin" />;
};

export default ProtectedRouteadmin;
