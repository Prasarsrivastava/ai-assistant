import React from "react";
import { Route,Routes} from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import  UserContext  from "./context/UserContext.jsx";
import { BrowserRouter } from 'react-router-dom'  
function App() {
  return (
    <BrowserRouter>
     <UserContext>
   <Routes>
     <Route path="/" element={<SignIn />} />
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signin" element={<SignIn/>}/>
   </Routes>
    </UserContext>
   </BrowserRouter>
  );
}

export default App;