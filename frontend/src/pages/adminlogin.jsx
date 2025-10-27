import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();
    
  const hLogin = async (e) => {
   e.preventDefault();
  

    try {
      const res = await axios
        .post(
          "http://localhost:1000/api/adminlogin",
          { username, password },
          { withCredentials: true }
        )
        ;
      setAlert(res.data.mess);
      navigate("/admindashbord");
    } catch (err) {
      setAlert(err.response.data.message || "Login failed");
    }
  };
  return (
    <div>
      <div className="w-screen h-screen bg-[#0b132b] flex justify-center items-center ">
        <div className="bg-[#1c2541] w-full max-w-[500px] h-[600px] m-2 rounded-md">
          <h1 className=" text-center m-10 text-[#e0fbfc] font-medium text-3xl">
            LOG IN
          </h1>
          <div className="bg-[#3a506b] h-[400px] m-10 rounded-3xl flex justify-center items-center px-10 ">
            <form onSubmit={hLogin}>
              <div className="flex-row justify-center flex-wrap ">
                <label className=" font-extrabold text-[#e0fbfc]">
                  USERNAME
                </label>
                <input
                  placeholder="Username"
                  value={username}
                  name="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className="w-full my-2  h-[40px] rounded-sm "
                ></input>

                <label className=" font-extrabold text-[#e0fbfc]">
                  PASSWORD
                </label>
                <input
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  className="w-full  my-2 h-[40px] rounded-sm"
                ></input>
                <button
                  type="submit"
                  className=" bg-[#5bc0be] text-[#e0fbfc] w-[100px] h-[50px] mb-5 rounded-lg   "
                >
                  LOG IN
                </button>
              </div>
            </form>
          </div>
          
          <p className="text-center text-[#e0fbfc]">{alert}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin
