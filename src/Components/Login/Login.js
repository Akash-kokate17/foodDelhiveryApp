import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export default function Login(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
 

  let navigate = useNavigate();
  let navigateSignUp = useNavigate();
  let emailRef = useRef();
  let passRef = useRef();


  const checkLogin = () => {
    
    if (emailRef.current.value === '' || passRef.current.value === '') {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email and password cannot be empty!",
      });
      return; 
    }
    let getDataInfo = JSON.parse(window.localStorage.getItem('user'))
    if (getDataInfo.email === email && getDataInfo.Password === password) {
     navigate('/restaurant')

      }
     else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }

  return (
    <div className="container mt-5 container-fluid">
      <div className="border border-2 m-auto p-4 rounded" style={{ minHeight: "300px", maxWidth: "400px" }}>
        <div className="text-center mb-4">
          <h4>Login Page</h4>
        </div>
        <div className="mb-3">
          <input type="email" className="form-control text-center" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} ref={emailRef}/>
        </div>
        <div className="mb-3">
          <input className="form-control text-center" type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value)  }} ref={passRef} />
        </div>
        <div className="mt-3 text-center">
          <button className="btn btn-primary " onClick={checkLogin}>Login</button>
          <button className="btn btn-danger  ms-5" onClick={() => { navigateSignUp('/signup') }}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
