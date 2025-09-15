import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/authBg.png";
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div 
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center" 
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form className="w-[90%] h-[600px] max-w-[500px] bg-black/20 backdrop-blur-sm shadow-lg shadow-black flex flex-col justify-center items-center gap-6 rounded-lg p-8">
        <h1 className="text-white text-3xl font-semibold mb-8">
          Register to <span className="text-blue-400">Virtual Assistant</span>
        </h1>
        <input 
          type="text" 
          placeholder="Enter your Name" 
          className="w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder:text-gray-300 rounded-lg px-4"
        />
        <input 
          type="email" 
          placeholder="Enter your email id" 
          className="w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder:text-gray-300 rounded-lg px-4"
        />
        <div className="w-full h-[60px] relative">
          <input 
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password" 
            className="w-full h-full outline-none border-2 border-white bg-transparent text-white placeholder:text-gray-300 rounded-lg px-4"
          />
          {showPassword ? (
            <BsFillEyeSlashFill 
              className="absolute top-1/2 right-4 -translate-y-1/2 text-white cursor-pointer text-xl"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <BsEyeFill 
              className="absolute top-1/2 right-4 -translate-y-1/2 text-white cursor-pointer text-xl"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
        <button className="min-w-[150px] h-[60px] mt-[30px] text-black font-semibold bg-white rounded-full text-[19px]">
          Sign Up
        </button>
        <p className="text-white text-[18px] cursor-pointer" onClick={() => navigate("/signin")}>
          Already have an account? <span className="text-blue-400">Sign In</span>
        </p>
      </form>
    </div>
  )
}

export default SignUp;