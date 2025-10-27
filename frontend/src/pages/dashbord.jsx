import React  from 'react'
import Navbar from '../components/navbar'
import List from '../components/list';
import { useState ,useEffect } from 'react';
import axios from 'axios';

const Dashbord =  () => {
  const [users, setUser] = useState({});
  const [notidata, setNoti] = useState([]);
  const [teams, setTeams] = useState([]);
    
  const data = async () => {
      const res = await axios.get("/api/dashboard", { withCredentials: true });
    setUser(res.data.user);
    setTeams(res.data.userf);
    console.log(users);

  }

  const notifiaction = async () => {
    const res = await axios.get("/api/noti");
    setNoti(res.data.noti);
    console.log(notidata);
  }
  
  useEffect(() => { 
    data();
    notifiaction();
  },[])
 
 

     
     

    if (!users) return  <div className="flex justify-center align-middle items-center text-[#e0fbfc]  ">
      Loading...
    </div>;
  return (
    <div className="bg-[#0b132b] h-screen w-screen">
      <Navbar></Navbar>
      <h1 className=" text-[#e0fbfc]  text-center mb-5 mt-7 font-extrabold text-4xl">
        WELCOME {users?.username}
      </h1>
      {/* <div class="flex flex-row flex-wrap md:flex-wrap-reverse  bg-[#1E1E1E]  rounded-md ">
        <div className="bg-[#A0A0A0] basis-1/3   m-3 ">dsf</div>
        <div className="bg-[#A0A0A0] basis-2/3  m-3">dfsf</div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#1c2541]  rounded-md">
        <div className="md:col-span-1 bg-[#3a506b] rounded-md m-10">
          <h1 className=" text-[#e0fbfc]  font-bold m-2 text-2xl">
            TOTAL NO OF SRUDENTS PARTCIPATE
          </h1>
          <p className=" font-extrabold text-5xl m-3 text-right text-[#5bc0be]   ">
            {teams.length}
          </p>
          <p className="text-center ">
            <button className="bg-[#3b7e7c]  h-[40px] rounded-md text-[white] p-3 text-center items-center mt-14 mb-3">
              SHOW ALL TEMS
            </button>
          </p>
        </div>
        <div className="md:col-span-2  rounded-md bg-[#3a506b] m-7 max-h-[300px] overflow-auto p-3">
          <h1 className=" text-[#e0fbfc]  font-bold m-2 text-2xl">
            LIVE LAEDER BOARD
          </h1>
          <List></List>
        </div>
      </div>
      <h1 className=" text-[#e0fbfc]  font-bold mt-9 mb-3 text-2xl text-center">
        NOTIFICATION
      </h1>

      <div className=" grid grid-row-4 grid-flow-col gap-4  w-screen h-[400px]  overflow-x-auto ">
        {notidata.map((noti, index) => (
          <div
            key={index}
            className=" bg-[#3a506b] m-5 w-[350px] h-[200px] rounded-md"
          >
            <h1 className="text-left font-bold m-4 text-[#e0fbfc]">
              {noti.heading}
            </h1>
            <p className="m-4 text-[#e0fbfc]">{noti.description}</p>

            <button className="bg-[#3b7e7c]  m-4 h-[40px] rounded-md  text-[#e0fbfc]  p-3 text-center items-center mt-14 mb-3">
              See More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashbord
