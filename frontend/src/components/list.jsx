import { useState, useEffect } from "react";
import axios from "axios";
export default function List() {
  const [leadrdata, setleader] = useState([]);
  const leader = async () => {
    const res = await axios.get("/api/leader");
    setleader(res.data.leader);
    console.log(leadrdata);
  };
  useEffect(() => {
    leader();
  }, []);
  return (
    <ul role="list" className="divide-y divide-white/5">
      {leadrdata.map((user) => (
        <li key={user.rank} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="size-12 flex-none rounded-full bg-gray-800 outline outline-1 -outline-offset-1 outline-white/10" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-[#0c0c0c]">
                {user.username}{" "}
                <span className=" text-[#5bc0be] ml-5">RANK :{user.rank}</span>
              </p>
              <p className="mt-1 truncate text-xs/5 text-[#fffdfd]">
                {user.email}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
