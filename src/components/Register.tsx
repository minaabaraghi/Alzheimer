import React ,{useState}from 'react'
import { toast } from "react-toastify";
import register from '../services/register';
import {Navigate} from "react-router-dom";

const Register = () => {
    const initialValues={firstName:"",lastName:"",username:"",password:""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [navigate, setNavigate] = useState(false);
    const userRegex=/^[a-zA-Z][s-zA-Z0-9-_]{3,23}$/;
    const pwdRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const handleEmail=(e:any)=>{
        let email=e.target.value;
        // if (/\S+@\S+\.\S+/.test(email)){setEmail(email);}
        // else{setEmail('');}
        
    }
    const handleChange=(e:any)=>{
        const {name,value}=e.target;
        setFormValues({...formValues,[name]:value});
        validate(formValues);
        console.log(formValues,'formValues');
        

    }
    const validate=(values:any)=>{
        const errors={};
      
    }
    const register1 = () => {
        register(formValues.firstName, formValues.lastName,formValues.username,formValues.password).then(result => {
          if (result) {
            toast.success('ثبت موفقیت آمیز');
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
                       onChange={handleChange}
                />
                <label>first Name</label>
            </div>
            <br/>
        <div className="form-floating">
                <input className="form-control" placeholder="Name"
                      onChange={handleChange}
                />
                <label>last Name</label>
            </div>
            <br/>
        <div className="form-floating">
          <input  className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleChange} />
          <label htmlFor="floatingInput">user name</label>
        </div>
        <br/>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange} />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange} />
          <label htmlFor="floatingPassword">Re-Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="button" onClick={register1} >Register</button>
      </form>
    </main>
  )
}

export default Register