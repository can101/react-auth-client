import React,{useState} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';

const Home=()=>{

const [data,setData]=useState(null);

const getUser=()=>{
  axios({
    method:"GET",
    withCredentials:true,
    url:"http://localhost:5899/user"
  })
  .then((res)=>{
    setData(res.data);
  });
}

  return (
    <div>
    <Link to="/login"  className="m-4">Login</Link>
    <Link to="/register" className="m-4">Register</Link>
    <button  onClick={getUser}>Get User</button>
    {data?<h1>Welcome back {data.username}</h1>:null}
    </div>
  )
}

export default Home;
