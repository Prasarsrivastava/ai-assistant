import React from "react";
import bg from "../assets/authBg.png";

function SignIn() {
  return (
    <div 
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center" 
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form className="w-[90%] h-[600px] max-w-[500px] bg-black/20 backdrop-blur-sm shadow-lg shadow-black flex flex-col justify-center items-center gap-6 rounded-lg p-8">
        <h1 className="text-white text-3xl font-semibold mb-8">
          Register to <span className="text-blue-400">Virtual Assistant</span>
        </h1>
        {/* <input 
          type="text" 
          placeholder="Enter your Name" 
          className="w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder:text-gray-300 rounded-lg px-4"
        /> */}
        <input 
          type="email" 
          placeholder="Enter your email id" 
          className="w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder:text-gray-300 rounded-lg px-4"
        />
        <input 
          type="password" 
          placeholder="Enter your password" 
          className="w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder:text-gray-300 rounded-lg px-4"
        />
      </form>
    </div>
  )
}

export default SignIn;