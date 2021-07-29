import React from 'react'
import {
  Link
} from "react-router-dom";
const getUser=()=>{
  axios({
    method:"GET",
    withCredentials:true,
    url:"http://localhost:5899/user"
  })
  .then((res)=>{
    console.log(res.data);
  });
}

function home() {
  return (
    <div>
    <Link to="/login"  className="m-4">Login</Link>
    <Link to="/register" className="m-4">Register</Link>
    <h1>Get User</h1>
<button  >Get User</button>

    </div>
  )
}

export default home
