import { Outlet, Navigate } from 'react-router-dom'
import HeaderMenue from '../components/uiBody/HeaderMenue';
import SideMenue from './../components/uiBody/SideMenue';

const PrivateRoutes = () => {
    let exiteToken="1";
    // let exiteToken=localStorage.getItem("token");
   // let auth = {'token':false}
    return(
        <div className='body-style'>
            <HeaderMenue/>
            <SideMenue/>
            {exiteToken ? <Outlet/> : <Navigate to="/Login" />}
        </div>
    )
}

export default PrivateRoutes