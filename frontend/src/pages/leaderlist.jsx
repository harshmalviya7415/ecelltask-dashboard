import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
const Leaderlist = () => {
  const [leadrdata, setleader] = useState([]);
  const navigate = useNavigate();
      const leader = async () => {
        const res = await axios.get("/api/leader");
        setleader(res.data.leader);
        console.log(leadrdata);
      };
      useEffect(() => {
        leader();
      }, []);
  return (
    <div>
      <h1 className="text-center text-[#e0fbfc] m-14 text-4xl">
        LEDER BOARD LIST
      </h1>
      <table className="  w-screen text-center ">
        <thead>
          <tr>
            <td className="  text-white font-extrabold ">INDEX</td>
            <td className="   text-white font-extrabold ">USERNAME</td>
            <td className="  text-white font-extrabold">EMAIL</td>
            <td className="  text-white font-extrabold ">RANK</td>
            <td className="  text-white font-extrabold ">OPRETIONS</td>
          </tr>
        </thead>
        <tbody>
          {leadrdata.map((user, index) => (
            <tr key={index}>
              <td className=" text-[#e0fbfc] ">{index}</td>
              <td className=" text-[#e0fbfc] ">{user.username}</td>
              <td className=" text-[#e0fbfc] ">{user.email}</td>
              <td className=" text-[#e0fbfc] ">{user.rank}</td>
              <td className=" text-[#e0fbfc] ">
                <button
                  onClick={() => navigate(`/editleader/${user._id}`)}
                  className=" bg-[#5bc0be] text-[#e0fbfc] w-[100px] m-3 h-[50px]  rounded-lg   "
                >
                  EDIT
                </button>

                <form action="/api/deletlist" method="post">
                  <input defaultValue={user._id} name="id" hidden></input>
                  <button
                    type="submit"
                    className=" bg-[#ef6767] text-[#e0fbfc] w-[100px] m-3 h-[50px]  rounded-lg   "
                  >
                    DELETE
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderlist
