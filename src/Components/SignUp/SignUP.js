import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export function SignUP(props) {
    const [email,setEmail] = useState("")
    const [Password,setPassword] = useState("")
    let navigate = useNavigate()

    let signUpDetails = () =>{
        Swal.fire({
            title: "Perfect!",
            text: "Would you like to Login?",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, take me to Login Page!",
          }).then((result)=>{
            if(result.isConfirmed){
                navigate('/')
            }
          })
        window.localStorage.setItem('user',JSON.stringify({email,Password}))
    }
  return <>
      <div className=" container-fluid text-center mt-4">
        <div className="border border-2 m-auto rounded-3 p-4" style={{ maxHeightHeight: "300px", maxWidth: "500px" }}>
            <div>
                <h4 className="text-center">SignUP Page</h4>
            </div>
            <div>
                <input className="text-center form-control mb-3 mt-4" placeholder="FirstName"/>
            </div>
            <div>
                <input className="text-center form-control mb-3" placeholder="LastName"/>
            </div>
            <div>
                <input className="text-center  form-control mb-3" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div>
                <input type="email" className="text-center form-control mb-3" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div className="text-center ">
                <button className="btn btn-primary " onClick={signUpDetails}>Login</button>
            </div>
        </div>
      </div>
  </>;
}
