import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let exiteToken="1";
    // let exiteToken=localStorage.getItem("token");
   // let auth = {'token':false}
    return(
        <div>
            
            {exiteToken ? <Outlet/> : <Navigate to="/Login" />}
        </div>
    )
}

export default PrivateRoutes