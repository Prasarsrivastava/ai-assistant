import React from "react";
import {UserDataContext} from "./UserContextData.jsx"
// import { createContext } from "react";


// export const UserDataContext=createContext();


function UserContext({ children }) 
{
    const serverUrl="http://localhost:8000";
    const value={serverUrl}
    return (
      
< UserDataContext.Provider value={value}>
{children}
</UserDataContext.Provider>
       
    )
}

export default UserContext;