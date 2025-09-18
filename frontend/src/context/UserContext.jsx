import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserDataContext } from "./UserContextData.jsx";

// Component renamed to UserDataProvider for clarity
function UserDataProvider({ children }) {
    const serverUrl = "http://localhost:8000";
    const [userData, setUserData] = useState(null);

    // Function to fetch the currently logged-in user
    const handleCurrentUser = async () => {
        try {
            const result = await axios.get(`${serverUrl}/api/user/current`, {
                withCredentials: true,
            });
            
            if (result.data) {
                setUserData(result.data);
            }
        } catch (error) {
            console.log("No user currently logged in or error fetching user.");
            setUserData(null); // Ensure user is null if fetch fails
        }
    };

    // Use useEffect to fetch the user when the app loads
    useEffect(() => {
        handleCurrentUser();
    }, []); // Empty array ensures this runs only once

    // Share all necessary values with the rest of the app
    const value = {
        serverUrl,
        userData,
        setUserData,
        handleCurrentUser,
    };

    return (
        <UserDataContext.Provider value={value}>
            {children}
        </UserDataContext.Provider>
    );
}

export default UserDataProvider;