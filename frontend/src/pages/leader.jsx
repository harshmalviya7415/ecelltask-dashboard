import React from "react";
import { useState } from "react";
import axios from "axios";

const Leader = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [rank, setPassword] = useState("");
  const [alert, setAlert] = useState("");
 
  const hSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:1000/api/leaderadd",
        { username, email, rank },
        { withCredentials: true }
      );
      setAlert(res.data.mess);
      console.log(res.data);
      
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };
  return (
    <div>
      <div className="w-screen h-screen bg-[#0b132b] flex justify-center items-center ">
        <div className="bg-[#1c2541] w-full max-w-[500px] h-[600px] m-2 rounded-md">
          <h1 className=" text-center m-10 text-[#e0fbfc] font-medium text-3xl">
            LAEDER BORD ADD
          </h1>
          <div className="bg-[#3a506b] h-[400px] m-10 rounded-3xl flex justify-center items-center px-10 ">
            <form onSubmit={hSubmit}>
              <div className="flex-row justify-center flex-wrap ">
                <label className=" font-extrabold text-[#e0fbfc]">
                  USERNAME
                </label>
                <input
                  placeholder="Username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className="w-full my-2  h-[40px] rounded-sm "
                ></input>
                <label className=" font-extraboldn text-[#e0fbfc]">
                  EMAIL ADDRESS
                </label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                  className="w-full my-2 h-[40px] rounded-sm"
                ></input>
                <label className=" font-extrabold text-[#e0fbfc]">RANK</label>
                <input
                  value={rank}
                  placeholder="Rank"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full  my-2 h-[40px] rounded-sm"
                ></input>
                <button
                  type="submit"
                  className=" bg-[#5bc0be] text-[#e0fbfc] w-[100px] h-[50px] mb-5 rounded-lg   "
                >
                  EDIT
                </button>
              </div>
            </form>
          </div>
          <p className="text-center text-[#e0fbfc]">
            Go To{" "}
            <a href="/admindashbord" className="text-[#5bc0be]">
              Dashboard
            </a>
          </p>
          <p className="text-center text-white">{alert}</p>
        </div>
      </div>
    </div>
  );
};

export default Leader;
