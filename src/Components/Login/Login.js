import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

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
    let getDataInfo = JSON.parse(window.localStorage.getItem('user'));
    if (getDataInfo.email === email && getDataInfo.Password === password) {
      navigate('/restaurant');
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="border border-2 p-4 rounded shadow-sm bg-white" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="text-center mb-4">
          <h4>Login Page</h4>
        </div>
        <div className="mb-3">
          <input 
            type="email" 
            className="form-control" 
            placeholder="Email" 
            onChange={(e) => { setEmail(e.target.value); }} 
            ref={emailRef} 
          />
        </div>
        <div className="mb-3">
          <input 
            className="form-control" 
            type="password" 
            placeholder="Password" 
            onChange={(e) => { setPassword(e.target.value); }} 
            ref={passRef} 
          />
        </div>
        <div className="d-flex justify-content-evenly mt-3">
          <button className="btn btn-primary" onClick={checkLogin}>Login</button>
            <button className="btn btn-danger" onClick={() => { navigateSignUp('/signup'); }}>Sign Up</button>
            <Link to="/restaurant">
              <button className="btn btn-success">Guest Login</button>
            </Link>
        </div>
      </div>
    </div>
  );
}
