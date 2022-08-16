import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let exiteToken="";
    // let exiteToken=localStorage.getItem("token");
   // let auth = {'token':false}
    return(
        exiteToken ? <Outlet/> : <Navigate to="/Login" />
    )
}

export default PrivateRoutes