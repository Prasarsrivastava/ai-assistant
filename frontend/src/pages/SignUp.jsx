import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/authBg.png";
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import axios from "axios";
import { UserDataContext } from "../context/UserContextData.jsx";

import { get, set } from "mongoose";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const {serverUrl}=useContext(UserDataContext);
 
 const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [loading,setLoading]=useState(false);
  const [password,setPassword]=useState("");
  const[err,setErr]=useState("");

  const handleSignUp=async(e)=>{
    e.preventDefault();
    setErr("");
     setLoading(true);
try{
  let result=await axios.post(`${serverUrl}/api/auth/signup`,{name,email,password},{withCredentials:true});
  console.log(result);
 setLoading(false);
if(result.data)
{
setName("");
setEmail("");
setPassword("");
navigate("/signin");

}
}
catch(err){
  console.log(err);
  setErr(err.response.data.message);
   setLoading(false);
}
  }

  return (
    <div 
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center" 
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form className="w-[90%] h-[600px] max-w-[500px] bg-black/20 backdrop-blur-sm shadow-lg shadow-black flex flex-col justify-center items-center gap-6 rounded-lg p-8" onSubmit={handleSignUp}>
        <h1 className="text-white text-3xl font-semibold mb-8">
          Register to <span className="text-blue-400">Virtual Assistant</span>
        </h1>
        <input 
          type="text" 
          placeholder="Enter your Name" 
          className="w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder:text-gray-300 rounded-lg px-4" required onChange={(e)=>setName(e.target.value)}
          value={name}
        />
        <input 
          type="email" 
          placeholder="Enter your email id" 
          className="w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder:text-gray-300 rounded-lg px-4"
        required onChange={(e)=>setEmail(e.target.value)}
          value={email}
        />
        <div className="w-full h-[60px] relative">
          <input 
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password" 
            className="w-full h-full outline-none border-2 border-white bg-transparent text-white placeholder:text-gray-300 rounded-lg px-4"
            required onChange={(e)=>setPassword(e.target.value)}
          value={password}
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
{          err.length>0 && <p className="text-red-500 text-[17px]">*{err}</p>}

        <button className="min-w-[150px] h-[60px] mt-[30px] text-black font-semibold bg-white rounded-full text-[19px]"
        disabled={loading}>
         {loading?"loading...":" Sign Up"}
        </button>
        <p className="text-white text-[18px] cursor-pointer" onClick={() => navigate("/signin")}>
          Already have an account? <span className="text-blue-400">SignIn</span>
        </p>
      </form>
    </div>
  )
}

export default SignUp;

