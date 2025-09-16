import React from "react";
import { createContext } from "react";


export const UserDataContext=createContext();


function UserContext({ children }) 
{
    const serverUrl="http://localhost:8000";
    const value={serverUrl}
    return (
      
< UserContext.Provider value={{value}}>
{children}
</UserContext.Provider>
       
    )
}

export default UserContext;