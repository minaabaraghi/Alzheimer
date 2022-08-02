import React, { useState } from "react";
import { toast } from "react-toastify";
import login from "../services/login";

//todo: Convert to funcation base
export default function LoginComponent() {
  //todo: get username and password from form 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login1 = () => {
    login(email, password).then(result => {
      if (result) {
        toast.success('ورود موفقیت آمیز')
      }

    })
  }
  return (
    <main className="form-signin w-100 m-auto">
      <form>
        <h1 className="h3 mb-3 fw-normal text-center"> login in</h1>
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="button" onClick={login1}>Sign in</button>
      </form>
    </main>
  )
}

