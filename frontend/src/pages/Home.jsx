import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen bg-[#0b132b] flex justify-center items-center ">
        <div className=" w-full max-w-[600px] h-[300px] bg-[#1C2541] m-2  flex justify-center items-center flex-wrap shadow-lg rounded-md">
          <form action="/signup">
            <button
              type="submit"
              className=" bg-[#e0fbfc]   text-[black]  w-[100px] h-[50px] m-5  rounded-lg"
            >
              SIGN IN
            </button>
          </form>
          <form action="/login">
            <button
              type="submit"
              className=" bg-[#e0fbfc] text-[black] w-[100px] h-[50px] m-5  rounded-lg"
            >
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home
