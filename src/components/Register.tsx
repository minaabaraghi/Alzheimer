import React ,{useState}from 'react'
import { toast } from "react-toastify";
import register from '../services/register';
import {Navigate} from "react-router-dom";

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);
    const handleEmail=(e:any)=>{
        let email=e.target.value;
        // if (/\S+@\S+\.\S+/.test(email)){setEmail(email);}
        // else{setEmail('');}
        
    }
    const register1 = () => {
        register(firstName, lastName,username,password).then(result => {
          if (result) {
            toast.success('ورود موفقیت آمیز');
            return <Navigate to="/" replace={true}/>;
          }
    
        })
      }
  return (
    <main className="form-signin w-100 m-auto">
      <form>
        <h1 className="h3 mb-3 fw-normal text-center"> Register</h1>
        <div className="form-floating">
                <input className="form-control" placeholder="Name"
                       onChange={e => setFirstName(e.target.value)}
                />
                <label>first Name</label>
            </div>
            <br/>
        <div className="form-floating">
                <input className="form-control" placeholder="Name"
                       onChange={e => setLastName(e.target.value)}
                />
                <label>last Name</label>
            </div>
            <br/>
        <div className="form-floating">
          <input  className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setUsername(e.target.value) } />
          <label htmlFor="floatingInput">user name</label>
        </div>
        <br/>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <label htmlFor="floatingPassword">Re-Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="button" onClick={register1} >Register</button>
      </form>
    </main>
  )
}

export default Register